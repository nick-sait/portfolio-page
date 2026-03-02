import { Resend } from "resend";

export async function POST(req) {

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // 1) Send to me
    const ownerResult = await resend.emails.send({
      from: "Nick Tetzlaff <contact@nickolas-tetzlaff.dev>",
      to: "nickolas.tetzlaff@gmail.com",
      reply_to: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (ownerResult.error) {
      return Response.json({ error: "Owner email failed", details: ownerResult.error }, { status: 500 });
    }

    // 2) Confirmation to sender 
    const confirmResult = await resend.emails.send({
      from: "Nick Tetzlaff <contact@nickolas-tetzlaff.dev>",
      to: email,
      subject: "Thanks for reaching out!",
      template: {
        id: "c0a28e08-5079-44ec-a65b-18934d45d653",
        variables: {
          name: name
        }
      }
    });

    if (confirmResult.error) {
      return Response.json({ error: "Confirmation failed", details: confirmResult.error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}