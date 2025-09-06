import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
