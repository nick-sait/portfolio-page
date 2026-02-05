import Banner from "@/components/Banner";
import AboutSection from "@/components/About";
import ProjectsSection from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="relative w-full justify-center sm:items-start">
        <Banner />
        <AboutSection />
        <ProjectsSection />
        <Contact />
      </main>
    </div>
  );
}
