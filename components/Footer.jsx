"use client";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Folder,
  Github,
  House,
  Mail,
  Send,
  SquareUser,
} from "lucide-react";
import Link from "next/link";

export default function footer() {
  return (
    <footer className="text-black bg-black py-10 font-sans">
      <div className="flex lg:flex-row flex-col justify-between lg:px-20 px-8 lg:mb-0 mb-12 space-y-12">
        {/* Nav */}
        <div className="flex flex-col text-white/60 items-start gap-y-1">
          <Link
            href={"/#home"}
            className="flex flex-row gap-x-2 hover:text-white/80 cursor-pointer transition-all duration-200"
          >
            <House size={20} />
            Home
          </Link>
          <Link
            href={"/#about"}
            className="flex flex-row gap-x-2 hover:text-white/80 cursor-pointer transition-all duration-200"
          >
            <SquareUser size={20} />
            About
          </Link>
          <Link
            href={"/#projects"}
            className="flex flex-row gap-x-2 hover:text-white/80 cursor-pointer transition-all duration-200"
          >
            <Folder size={20} />
            Projects
          </Link>
          <Link
            href={"/#contact"}
            className="flex flex-row gap-x-2 hover:text-white/80 cursor-pointer transition-all duration-200"
          >
            <Send size={20} />
            Contact
          </Link>
        </div>

        {/* DL Resume + Repo Link */}
        <div className="flex flex-col gap-y-2 lg:items-end items-center justify-end lg:mb-0">
          <a
            href="/Nickolas-Tetzlaff-Resume.pdf"
            download
            className="cursor-pointer text-white/60 flex flex-row items-center gap-x-4 hover:text-white/80 transition-all duration-200"
          >
            Download my resume
            <Download />
          </a>
          <Link
            title="Link to page repo"
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/nick-sait/portfolio-page.git"}
            className="cursor-pointer text-white/60 flex flex-row items-center gap-x-4 hover:text-white/80 transition-all duration-200"
          >
            View this page&apos;s repo
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Links + copyright */}
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="flex items-center justify-center gap-x-6">
          <a
            href="mailto:nickolas.tetzlaff@gmail.com"
            aria-label="email link"
            title="email link"
            className="cursor-pointer hover:bg-white/70 transition-all duration-300 bg-white p-1 rounded-full"
          >
            <Mail />
          </a>
          <button
            aria-label="github link"
            title="github link"
            className="cursor-pointer hover:bg-white/70 transition-all duration-300 bg-white p-1 rounded-full"
          >
            <Github />
          </button>
        </div>
        <p className="text-white/60 text-md">
          Nickolas Tetzlaff ©{new Date().getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
}
