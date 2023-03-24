/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';
import DownloadLink from '../DownloadLink';

function Jumbotron() {
  return (
    <>
      {/* outer container */}
      <section className="w-full h-max mb-64 flex flex-col" id="home">
        {/* title and desc */}
        <section
          className="linear-primary w-full h-screen flex flex-col items-center justify-center md:justify-start text-white text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: '-10' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="text-5xl md:text-6xl font-extrabold mb-8 mt-12 md:mt-36 px-3 md:px-4"
          >
            Ziad Smart Edu
            <br />
            Application
          </motion.h1>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut' }}
            className="text-sm md:text-md font-light w-full md:w-3/4 px-4 md:px-8"
          >
            Solusi cerdas memanfaatkan teknologi terkini untuk mengelola pesantren dan sekolah islam
          </motion.span>
        </section>
        {/* apps screenshots */}
        <section className="relative w-full h-[55vh] md:min-h-[75vh] max-h-max flex flex-col justify-end items-center p-12">
          {/* screenshots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-3/4 h-max absolute -top-32  md:-top-64 flex gap-12 items-center justify-center"
          >
            <PhoneMockup className="hidden md:block" size="500px" />
            <PhoneMockup className="w-3/4 md:w-max" />
            <PhoneMockup className="hidden md:block" size="500px" />
          </motion.div>
          {/* download links */}
          <div className="w-full flex gap-8 justify-center">
            <DownloadLink />
            <DownloadLink />
          </div>
        </section>
      </section>

    </>
  )
}

export default Jumbotron;
