import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Principles from "@/components/Principles";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-obsidian">
      <Header />
      <Hero />
      <Projects />
      <Principles />
      <Footer />
      <MobileNav />
    </main>
  );
}
