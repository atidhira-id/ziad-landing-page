/* eslint-disable max-len */
import React from "react";
import Image from "next/image";

function AboutUsQuotes() {
  return (
    <section className="bg-gray-50 w-5/6 max-w-7xl mx-auto mt-20 flex flex-col lg:flex-row justify-center items-center gap-4 py-8 px-2 rounded-3xl">
      {/* image */}
      <div className="lg:basis-1/2">
        <a href="http://www.freepik.com" className="hidden">
          Designed by vectorjuice / Freepik
        </a>
        <Image
          src="./islamic-school-vector.jpg"
          height={600}
          width={600}
          alt="islamic-school-pesantren-pesantren-modern"
          className="mix-blend-multiply"
        />
      </div>
      <div className="lg:basis-1/2">
        {/* title */}
        <div className="w-full mb-3 lg:mb-8">
          <h3 className="text-center lg:text-left font-bold text-xl md:text-3xl px-4">
            Membantu Pesantren dan Sekolah Islam
            <span className="text-blue-600"> Memanfaatkan Teknologi</span>
          </h3>
        </div>
        {/* paragraph */}
        <article className="w-full text-sm md:text-base text-center lg:text-left px-4 text-gray-600">
          <p>
            Kami mengembangkan ZIAD agar teknologi terkini dapat dimanfaatkan
            untuk membantu lembaga pendidikan dalam mempermudah proses uang
            pembayaran uang sekolah, absensi guru akurat sesuai jadwal,
            mengelola keuangan sekolah, mengelola SDM, memberi pelayanan terbaik
            untuk wali murid, dll.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutUsQuotes;
