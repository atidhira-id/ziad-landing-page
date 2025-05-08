/* eslint-disable import/extensions */
import Navbar from "@/components/Navbar";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Features from "@/components/sections/Features";
import Products from "@/components/sections/Products";
import Pricing from "@/components/sections/Pricing";
import Download from "@/components/sections/Download";
import Documentation from "@/components/sections/Documentation";
import VideoProfile from "@/components/sections/VideoProfile";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export default function App() {
  return (
    <main id="luxy" className="overflow-x-hidden max-w-screen bg-gray-50">
      <div className="bg-white w-full max-w-screen-2xl mx-auto border-x border-gray-200">
        <Navbar />
        <Home />
        <About />
        <Clients />
        <Testimonials />
        <Features />
        <Products />
        <Pricing />
        <Download />
        <Documentation />
        <VideoProfile />
        <Contact />
        <Footer />
        <FloatingContactButton />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
