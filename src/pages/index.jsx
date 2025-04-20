/* eslint-disable import/extensions */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/sections/Jumbotron";
import Clients from "@/components/sections/Clients";
import AboutUsQuotes from "@/components/sections/AboutUsQuotes";
import Features from "@/components/sections/Features";
import Products from "@/components/sections/Products";
import DownloadDemo from "@/components/sections/DownloadDemo";
import Pricing from "@/components/sections/Pricing";
import FloatingContactButton from "@/components/FloatingContactButton";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main id="luxy" className="overflow-x-hidden max-w-screen bg-gray-50">
      <div className="bg-white w-full max-w-screen-2xl mx-auto border-x border-gray-200">
        <Navbar />
        <Jumbotron />
        <Clients />
        <AboutUsQuotes />
        <Features />
        <Products />
        <Pricing />
        <DownloadDemo />
        <Testimonials />
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
