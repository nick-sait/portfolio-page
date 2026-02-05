import {
  Boxes,
  BriefcaseBusiness,
  GraduationCap,
  MapPinHouse,
} from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative mb-60">
      <div className="mx-auto px-4  sm:px-6 lg:px-44 py-12 sm:py-16">
        <h2 className="relative font-sans text-brand text-4xl sm:text-5xl lg:text-6xl lg:text-left text-center font-medium mb-12 sm:mb-20 lg:tracking-widest">
          About
        </h2>

        {/* Seperator */}
        <div className="bg-[#474747] h-0.5 w-full my-20 lg:my-30"></div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Cluster */}
          <div className="flex flex-col gap-y-10 sm:gap-y-14">
            {/* Profile row  */}
            <div className="flex flex-col justify-center sm:flex-row sm:items-start gap-6 sm:gap-8">
              <div className="h-32 w-32 my-auto sm:h-40 sm:w-40 overflow-hidden rounded-full relative border-2 border-[#cacaca] shrink-0 mx-auto sm:mx-0">
                <Image
                  src="/images/profile_pic.png"
                  alt="Nickolas Tetzlaff's profile picture"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 160px, 128px"
                  priority
                />
              </div>

              <div className="flex flex-col space-y-2 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-medium font-sans text-[#eeeeee] mb-8">
                  Nickolas Tetzlaff
                </h3>

                {/* Info rows */}
                <div className="text-sm sm:text-base font-light text-[#eeeeee] flex items-start gap-3 sm:gap-2">
                  <Boxes strokeWidth={1} className=" shrink-0 my-auto" />
                  <h4>Full Stack Developer</h4>
                </div>

                <div className="text-sm sm:text-base font-light text-[#eeeeee] flex items-start gap-3 sm:gap-2">
                  <MapPinHouse strokeWidth={1} className=" shrink-0 my-auto" />
                  <h4>Calgary, AB, Canada</h4>
                </div>

                <div className="text-sm sm:text-base font-light text-[#eeeeee] flex items-start gap-3 sm:gap-2 text-left">
                  <GraduationCap
                    strokeWidth={1}
                    className=" shrink-0 my-auto"
                  />
                  <h4>Dip. Software Development, SAIT (Fall 2026)</h4>
                </div>

                <div className="text-sm sm:text-base font-light text-[#eeeeee] flex items-start gap-3 sm:gap-2 text-left">
                  <GraduationCap strokeWidth={1} className="shrink-0 my-auto" />
                  <h4>Canadian Securities Certificate (CSC)</h4>
                </div>

                <div className="text-sm sm:text-base font-light text-[#eeeeee] flex items-start gap-3 sm:gap-2">
                  <BriefcaseBusiness
                    strokeWidth={1}
                    className="shrink-0 my-auto"
                  />
                  <h4>Founder of Weave</h4>
                </div>
              </div>
            </div>

            <p className="text-[#eeeeee] leading-snug font-light text-base sm:text-lg lg:text-xl text-center">
              Pursuant to my enjoyment of building and creating, I began down
              the self-taught route of software development. After getting a
              taste, and wanting to maximize my skillset, I enrolled at the
              Software program at SAIT, where I will complete my studies in the
              Fall of 2026. In that time I have fallen in love with the
              creativity, the logic flows and freedom of developing software. To
              date, I have a number of freelance and personal projects on the go
              and ready for launch in the near future, which you can view below.
            </p>
          </div>

          {/* Right Cluster */}
          <div className="w-full">
            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
              <SkillCard
                border="#FED846"
                text="#FED846"
                label={["JavaScript"]}
                img="/images/javascript-logo.png"
                tooltip="I use JavaScript daily across Next.js, React Native, and vanilla web projects—building interactive UI, fetching data, and wiring up front-end logic."
              />
              <SkillCard
                border="#0079D9"
                text="#0079D9"
                label={["SQL"]}
                img="/images/sql.png"
                tooltip={
                  "The old bread and butter - SQL. I’ve designed and queried relational data using PostgreSQL (Supabase), including multi-table relationships, joins, and practical schema decisions for real app features."
                }
              />
              <SkillCard
                border="#F8D64B"
                text="#F8D64B"
                label={["Python"]}
                img="/images/python-logo.png"
                tooltip="I use Python for data cleaning/transformations, automation, small scripts, plus some web work (e.g., Flask) and finance-focused tooling."
              />

              <SkillCard
                border="#64D8F8"
                text="#64D8F8"
                label={["React /", "React Native"]}
                img="/images/react.png"
                tooltip={
                  "I've spent many hours noodling around in NextJS and React Native. View my projects below for a glimpse of what I've created with these powerful frameworks."
                }
              />
              <SkillCard
                border="#7EBC06"
                text="#7EBC06"
                label={["Node"]}
                img="/images/node.png"
                tooltip="I’ve used Node.js to build back-end utilities and APIs—handling requests, working with databases, and wiring up server-side logic."
              />
              <SkillCard
                border="#EF5232"
                text="#EF5232"
                label={["Git"]}
                img="/images/git.png"
                tooltip="Daily Git use for branching, reviews, and keeping work clean. And yes, I keep my secrets OUT of repos."
              />

              <SkillCard
                border="#06B4D4"
                text="#06B4D4"
                label={["Tailwind CSS"]}
                img="/images/tailwind-logo.png"
                tooltip={
                  "Ahh, styling - my best friend and my worst enemy. Made easier with Tailwind!"
                }
              />
              <SkillCard
                border="#70C675"
                text="#70C675"
                label={["Supabase"]}
                img="/images/supabase.png"
                tooltip="Extensive experience with Supabase (Postgres + Auth + Storage), including schema design and building app features around a real relational backend."
              />
              <SkillCard
                border="#F28020"
                text="#F28020"
                label={["CloudFlare"]}
                img="/images/cloudflare.png"
                tooltip={
                  "From creating my own storage buckets to hosting websites, I've made use of the power of CloudFlare. Added bonus for their anti-webscraping protection!"
                }
              />

              <SkillCard
                border="#FEF101"
                text="#FEF101"
                label={["DuckDB"]}
                img="/images/duckdb.png"
                tooltip="I’ve used DuckDB for analytic workflows, querying Parquet files and transforming larger datasets efficiently without spinning up a full database."
              />

              <SkillCard
                border="#DE282C"
                text="#DE282C"
                label={["Java"]}
                img="/images/java.png"
                tooltip="Java is where I solidified OOP fundamentals. I’m less active in it today, but I’m comfortable and happy to go deeper."
              />

              <SkillCard
                border="#5680BD"
                text="#5680BD"
                label={["Google Cloud"]}
                img="/images/google-cloud.png"
                tooltip="Adept in using the google cloud console for their various API services (Maps SDK, Places API, Geocoding) as well as in deploying my own APIs."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ border, text, label, img, tooltip }) {
  return (
    <div
      className="group relative flex flex-col items-center border-2 p-3 sm:p-4 rounded-xl
                 hover:scale-105 transition-all duration-300
                 focus-within:scale-105"
      style={{ borderColor: border }}
      tabIndex={0} // lets keyboard users focus the card
    >
      {/* Tooltip */}
      {tooltip ? (
        <div
          className="
            pointer-events-none absolute -top-3 left-1/2 z-20 w-40 lg:w-55 -translate-x-1/2 -translate-y-full
            opacity-0 scale-95 transition-all duration-200
            group-hover:opacity-100 group-hover:scale-100
            group-focus-within:opacity-100 group-focus-within:scale-100 wrap-break-word
          "
        >
          <div
            className="relative rounded-lg border px-3 py-2 text-xs sm:text-sm leading-snug shadow-xl bg-[#111111]"
            style={{ color: text }}
          >
            <p className="font-light">{tooltip}</p>

            {/* Arrow */}
            <div
              className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r bg-[#111111]"
              style={{ borderColor: border }}
            />
          </div>
        </div>
      ) : null}

      <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20">
        <Image
          src={img}
          alt=""
          fill
          className="object-contain"
          sizes="(min-width: 768px) 80px, (min-width: 640px) 64px, 56px"
          priority
        />
      </div>

      <div className="mt-2 text-center">
        {label.map((line, idx) => (
          <h5
            key={idx}
            className="font-medium text-xs sm:text-sm tracking-widest leading-snug"
            style={{ color: text }}
          >
            {line}
          </h5>
        ))}
      </div>
    </div>
  );
}
