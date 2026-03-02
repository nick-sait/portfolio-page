export const runtime = "edge";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return json({ error: "RESEND_API_KEY is not defined" }, 500);

    const { name, email, phone, message } =
      (await req.json()) as ContactPayload;

    if (!name || !email || !message) {
      return json({ error: "Missing fields" }, 400);
    }

    const from = "Nick Tetzlaff <contact@nickolas-tetzlaff.dev>";

    // 1) Send to you
    const ownerResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: "nickolas.tetzlaff@gmail.com",
        reply_to: email,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h2>New Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!ownerResp.ok) {
      const details = await ownerResp.text();
      return json({ error: "Owner email failed", details }, 502);
    }

    // 2) Confirmation to sender (template)
    const confirmResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: email,
        subject: "Thanks for reaching out!",
        template: {
          id: "c0a28e08-5079-44ec-a65b-18934d45d653",
          variables: { name: name },
        },
      }),
    });

    if (!confirmResp.ok) {
      const details = await confirmResp.text();
      return json({ error: "Confirmation failed", details }, 502);
    }

    return json({ success: true }, 200);
  } catch (err) {
    // Avoid leaking internals
    return json({ error: "Server error: ", err }, 500);
  }
}

// Small helper to avoid HTML injection in the email body
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
