/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import PhoneMockup from "../PhoneMockup";
import { IoLogoYoutube } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { SectionSubTitle } from "../Typography";

function Jumbotron() {
  return (
    <>
      <section className="w-full pt-32 lg:pt-40 flex flex-col" id="home">
        <section className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl leading-snug sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-gray-900">
            Integrated System <br /> for Better <br /> School Management
          </h1>
          <SectionSubTitle className="px-4 my-8">
            Dukung kemajuan lembaga Anda dengan platform all-in-one: mulai dari
            manajemen siswa, pembayaran digital, e-learning, hingga komunikasi
            wali murid — semuanya dalam satu tempat.
          </SectionSubTitle>
          <div className="w-3/4 flex flex-col sm:flex-row sm:justify-center sm:my-12 gap-4 lg:gap-6">
            <a
              href="#demo"
              className="w-full max-w-xs mx-auto sm:mx-0 px-2 py-3 border rounded-md flex justify-center items-center gap-2 bg-blue-500 text-white hover:bg-blue-600"
            >
              <MdDownload size={20} />
              Download ZIAD
            </a>
            <a
              href="https://www.youtube.com/@ptmitracerdasnusantara"
              target="_blank"
              className="w-full max-w-xs mx-auto sm:mx-0 px-2 py-3 border rounded-md flex justify-center items-center gap-2 hover:bg-gray-50"
            >
              <IoLogoYoutube size={20} className="text-brand-title" />
              Demo Aplikasi
            </a>
          </div>
        </section>

        {/* apps screenshots */}
        <section className="mt-8 md:mt-12">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-3xl m-auto relative flex justify-center items-center">
            <PhoneMockup
              className="w-40 md:w-48 lg:w-72 absolute top-6 left-0"
              imageUrl="./jumbotron-phone-mockup1.png"
            />
            <PhoneMockup
              className="w-48 md:w-56 lg:w-80 z-10"
              imageUrl="./phone-mockup.png"
            />
            <PhoneMockup
              className="w-40 md:w-48 lg:w-72 absolute top-6 right-0"
              imageUrl="./jumbotron-phone-mockup2.png"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Jumbotron;
