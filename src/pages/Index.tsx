import Header from "@/components/hotel/Header";
import Hero from "@/components/hotel/Hero";
import Experience from "@/components/hotel/Experience";
import Rooms from "@/components/hotel/Rooms";
import Gallery from "@/components/hotel/Gallery";
import About from "@/components/hotel/About";
import CTA from "@/components/hotel/CTA";
import Footer from "@/components/hotel/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Experience />
      <Rooms />
      <Gallery />
      <About />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
