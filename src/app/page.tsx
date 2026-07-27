import { Navbar } from "@/components/layout/Navbar";
import  About  from "@/components/sections/About";
import  Projects  from "@/components/sections/Projects";
import  Contact  from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero.";
import AcademicJourney from "@/components/sections/AcademicJourney";
import WorkExperience from "@/components/sections/WorkExperience";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div
        className="fixed inset-0 -z-50 bg-cover bg-top bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      />
      <div className="fixed inset-0 -z-40 bg-[#050816]/45" />

      <Navbar />
      <Hero />
      <About />
      <AcademicJourney />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
}