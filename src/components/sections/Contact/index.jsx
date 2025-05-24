import React from "react";
import { SectionSubTitle, SectionTitle } from "@/components/Typography";
import { BsWhatsapp } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { whatsappTemplateText } from "@/data/data";
import { SectionContainer } from "@/components/Containers";
import { Button } from "@/components/Button";

function Contact() {
  const encodedTeks = encodeURIComponent(whatsappTemplateText);

  return (
    <>
      <SectionContainer className="pt-32" id="contact">
        <div className="max-w-4xl mx-auto bg-blue-700 text-white flex flex-col justify-center items-center rounded-xl py-10 md:py-20">
          <SectionTitle className="mb-8 md:mb-12 max-w-3xl mx-auto text-white !leading-snug">
            Tertarik untuk menggunakan sistem kami?
          </SectionTitle>
          <SectionSubTitle className="mb-8 md:!text-xl !max-w-3xl text-white text-center">
            Diskusikan kebutuhan lembaga Anda dengan tim kami — gratis tanpa
            biaya!
          </SectionSubTitle>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 z-0 ">
            <a
              href={`https://api.whatsapp.com/send?phone=6287776669010&text=${encodedTeks}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5/6 max-w-xs"
            >
              <Button className="gap-2 w-full py-3">
                <BsWhatsapp size={24} />
                Chat via WhatsApp
              </Button>
            </a>
            <a
              href="https://demo2.ziadsistem.com/dashboard"
              target="_blank"
              className="w-5/6 max-w-xs"
            >
              <Button className="gap-2 w-full py-3">
                <MdDashboard size={24} />
                Coba Dashboard ZIAD
              </Button>
            </a>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default Contact;
