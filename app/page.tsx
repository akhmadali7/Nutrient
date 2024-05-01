import About from "@/components/landingpage/About";
import Blog from "@/components/landingpage/Blog";
import FAQ from "@/components/landingpage/FAQ";
import Footer from "@/components/landingpage/Footer";
import Hero from "@/components/landingpage/Hero";
import Navbar from "@/components/landingpage/Navbar";
import About_2 from "@/components/landingpage/About_2";

export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <About_2 />
      <FAQ />
      <Blog />
      <Footer />
    </main>
  );
}
