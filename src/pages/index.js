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
// import luxy from 'luxy.js';

export default function Home() {
  // const init = () => {
  //   luxy.init()

  //   luxy.settings.wrapperSpeed = 0.02
  // }

  // useEffect(() => {
  //   init()
  // }, [])

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
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
