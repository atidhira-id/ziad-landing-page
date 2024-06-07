/* eslint-disable import/extensions */
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Jumbotron from '@/components/sections/Jumbotron';
import Clients from '@/components/sections/Clients';
import AboutUsQuotes from '@/components/sections/AboutUsQuotes';
import Features from '@/components/sections/Features';
import Products from '@/components/sections/Products';
import DownloadDemo from '@/components/sections/DownloadDemo';
import Pricing from '@/components/sections/Pricing';
import FloatingContactButton from '@/components/FloatingContactButton';

export default function Home() {
  return (
    <main id="luxy" className="overflow-x-hidden max-w-scren">
      <Navbar />
      <Jumbotron />
      <Clients />
      <Features />
      <AboutUsQuotes />
      <Products />
      <DownloadDemo />
      <Pricing />
      <Footer />
      <FloatingContactButton />
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
