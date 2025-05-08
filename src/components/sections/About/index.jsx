import { SectionContainer } from "@/components/Containers";
import { SectionSubTitle, SectionTitle } from "@/components/Typography";
import React from "react";

function About() {
  return (
    <SectionContainer className="bg-gray-50 mt-20 flex flex-col lg:flex-row justify-center items-center gap-4">
      <div className="lg:basis-1/2">
        <a href="http://www.freepik.com" className="hidden">
          Designed by vectorjuice / Freepik
        </a>
        <img
          src="./islamic-school-vector.jpg"
          alt="islamic-school-pesantren-pesantren-modern"
          className="mix-blend-multiply"
        />
      </div>
      <div className="lg:basis-1/2">
        <SectionTitle className="text-xl mb-8 px-8 lg:text-left">
          Membantu Pesantren dan Sekolah Islam
          <span className="text-blue-700"> Memanfaatkan Teknologi</span>
        </SectionTitle>
        <SectionSubTitle className="text-center px-3 lg:text-left lg:px-8">
          Kami mengembangkan ZIAD agar teknologi terkini dapat dimanfaatkan
          untuk membantu lembaga pendidikan dalam mempermudah proses uang
          pembayaran uang sekolah, absensi guru akurat sesuai jadwal, mengelola
          keuangan sekolah, mengelola SDM, memberi pelayanan terbaik untuk wali
          murid, dll.
        </SectionSubTitle>
      </div>
    </SectionContainer>
  );
}

export default About;
