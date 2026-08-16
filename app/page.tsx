import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Principles from "@/components/Principles";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import MotionProvider from "@/components/MotionProvider";
import SkipLink from "@/components/SkipLink";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-clip bg-[var(--ink)]">
      <div className="noise" aria-hidden="true" />
      <MotionProvider>
        <SkipLink />
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Principles />
        <Footer />
        <MobileNav />
      </MotionProvider>
    </main>
  );
}
