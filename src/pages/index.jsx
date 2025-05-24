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
import {
  getAllTestimony,
  getAllClients,
  getAllDocumentations,
} from "../../lib/notion";
import { clients, testimonials, documentations } from "@/data/data";

export default function App({
  testimonialsData,
  clientsData,
  documentationsData,
}) {
  return (
    <main id="luxy" className="overflow-x-hidden max-w-screen bg-gray-50">
      <div className="bg-white w-full max-w-screen-2xl mx-auto border-x border-gray-200">
        <Navbar />
        <Home />
        <About />
        <Clients data={clientsData ? clientsData : clients} />
        <Testimonials
          data={testimonialsData ? testimonialsData : testimonials}
        />
        <Features />
        <Products />
        <Pricing />
        <Download />
        <Documentation
          data={documentationsData ? documentationsData : documentations}
        />
        <VideoProfile />
        <Contact />
        <Footer />
        <FloatingContactButton />
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const testimonialsData = await getAllTestimony();
  const clientsData = await getAllClients();
  const documentationsData = await getAllDocumentations();

  return {
    props: {
      testimonialsData: testimonialsData,
      clientsData: clientsData,
      documentationsData: documentationsData,
    },
    revalidate: 60,
  };
};
