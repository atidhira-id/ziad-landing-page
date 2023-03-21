/* eslint-disable react/react-in-jsx-scope */
import Navbar from '@/components/Navbar';
import Jumbotron from '@/components/sections/Jumbotron';
import Clients from '@/components/sections/Clients';
import AboutUsQuotes from '@/components/sections/AboutUsQuotes';
import Features from '@/components/sections/Features';
import Products from '@/components/sections/Products';
import DownloadDemo from '@/components/sections/DownloadDemo';
import Footer from '@/components/Footer';
import Pricing from '@/components/sections/Pricing';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Jumbotron />
      <Clients />
      <AboutUsQuotes />
      <Features />
      <Products />
      <DownloadDemo />
      <Pricing />
      <Footer />
    </main>
  )
}

export async function getStaticProps(){
  return {
    props: {},
  }
}
