import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <section id="banner" className="flex flex-col h-screen text-[#f8f8f8] justify-center items-center">
      <div className="flex flex-row gap-4">
        <h1 className="lg:text-5xl text-3xl">Hello,</h1>
        <h1 className="lg:text-5xl text-3xl text-brand">I&apos;m Nick.</h1>
      </div>
      <h1 className="lg:text-5xl text-center text-3xl mb-10">Welcome to my webpage</h1>
      <Link
        href={"/#projects"}
        className="flex flex-row gap-6 lg:text-2xl text-lg border-brand border lg:px-8 lg:py-4 px-4 py-2 rounded-2xl text-brand hover:cursor-pointer hover:px-12 transition-all duration-300 hover:border-brand-bright hover:text-brand-bright"
      >
        View my work
        <ArrowDown className="my-auto" size={28} />
      </Link>
    </section>
  );
}
