import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technology from "../components/Technology";
import Features from "../components/Features";
import Demo from "../components/Demo";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <Features />
      <Demo />
      <Footer />
    </div>
  );
}
