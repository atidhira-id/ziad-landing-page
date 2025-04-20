/* eslint-disable max-len */
import React from "react";
import { SectionSubTitle, SectionTitle } from "../Typography";
import { BsWhatsapp } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

function Contact() {
  return (
    <>
      <section
        className="bg-[#101014] w-5/6 max-w-6xl mx-auto py-20 md:py-30 xl:py-40 px-6 flex flex-col justify-center items-center rounded-[2rem] text-white"
        id="contact"
      >
        <SectionTitle className="mb-8 md:mb-12 max-w-3xl mx-auto text-white !leading-snug">
          Tertarik untuk menggunakan sistem kami?
        </SectionTitle>
        <SectionSubTitle className="mb-8 md:!text-xl !max-w-3xl text-white">
          Diskusikan kebutuhan lembaga Anda dengan tim kami — gratis tanpa
          biaya!
        </SectionSubTitle>
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <a
            href="http://wa.me/6287776669010"
            target="_blank"
            className="w-full max-w-xs p-4 text-sm border border-white flex justify-center items-center gap-2"
          >
            <BsWhatsapp size={24} />
            Chat via WhatsApp
          </a>
          <a
            href="https://demo2.ziadsistem.com/dashboard"
            target="_blank"
            className="w-full max-w-xs p-4 text-sm border border-white flex justify-center items-center gap-2"
          >
            <MdDashboard size={24} />
            Coba Dashboard ZIAD
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
