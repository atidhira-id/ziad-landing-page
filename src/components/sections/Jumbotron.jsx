/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

function Jumbotron() {
  return (
    <>
      {/* outer container */}
      <section className="w-full h-max mb-16 md:mb-44 flex flex-col" id="home">
        {/* title and desc */}
        <section
          className="linear-primary w-full h-[60vh] md:h-screen flex flex-col items-center justify-center md:justify-start text-white text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: '-10' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut' }}
            className="text-2xl md:text-5xl font-extrabold px-3 md:px-4 mt-4 md:mt-28 md:py-12"
          >
            ZIAD
            <br />
            Smart Education System
          </motion.h1>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut' }}
            className="text-md md:text-md w-full md:w-3/4 px-4 md:px-8 md:mb-8"
          >
            Solusi cerdas memanfaatkan teknologi terkini untuk mengelola pesantren dan sekolah islam
          </motion.span>
        </section>
        {/* apps screenshots */}
        <section className="relative w-full h-[55vh] md:min-h-[75vh] max-h-max flex flex-col justify-end items-center p-12 mt-8">
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
        </section>
      </section>

    </>
  );
}

export default Jumbotron;
