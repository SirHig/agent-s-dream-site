import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PropertySearch />
      <Properties />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
