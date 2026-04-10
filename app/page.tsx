import Hero from "@/components/sections/Hero";
import Crew from "@/components/sections/Crew";
import Services from "@/components/sections/Services";
import Studio from "@/components/sections/Studio";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Crew />
      <Services />
      <Studio />
      <Footer />
    </main>
  );
}
