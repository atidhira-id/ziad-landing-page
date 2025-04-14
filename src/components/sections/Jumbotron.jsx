/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import { motion } from "framer-motion";
import PhoneMockup from "../PhoneMockup";
import { IoLogoYoutube } from "react-icons/io";
import Button from "../Button";

function Jumbotron() {
  return (
    <>
      {/* outer container */}
      <section
        className="w-full h-max pt-32 lg:pt-40 mb-16 flex flex-col gap-6"
        id="home"
      >
        <section className="w-full flex flex-col items-center justify-center md:justify-start text-center gap-6 lg:gap-8">
          <h1 className="text-3xl leading-snug sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-brand-title">
            Integrated System <br /> for Better <br /> School Management
          </h1>
          <span className="text-base lg:text-lg w-3/4 max-w-3xl text-gray-600">
            Dukung kemajuan lembaga Anda dengan platform all-in-one: mulai dari
            manajemen siswa, pembayaran digital, e-learning, hingga komunikasi
            wali murid — semuanya dalam satu tempat.
          </span>
          <div className="w-3/4 flex flex-col sm:flex-row sm:justify-center gap-3 lg:gap-6">
            <a href="#demo">
              <Button
                variant="fill"
                color="blue"
                className="w-full sm:w-max lg:text-lg py-4 shadow-md"
              >
                Download Ziad System
              </Button>
            </a>
            <a href="#">
              <Button
                variant="fill"
                color="white"
                className="w-full lg:text-lg py-4 flex justify-center items-center gap-2 shadow-md"
              >
                <IoLogoYoutube size={18} />
                Demo Aplikasi
              </Button>
            </a>
          </div>
        </section>

        {/* apps screenshots */}
        <section className="mt-6">
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
