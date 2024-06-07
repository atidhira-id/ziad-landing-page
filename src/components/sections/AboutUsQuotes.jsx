/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';

function AboutUsQuotes() {
  return (
    <section className="w-full h-[60vh] md:h-[100vh] flex flex-col justify-center items-center px-2 md:px-4 md:mb-20">
      {/* title */}
      <div className="mb-8">
        <a href="http://www.freepik.com" className="hidden">Designed by vectorjuice / Freepik</a>
        <Image src="./islamic-school-vector.jpg" height={800} width={800} alt="islamic-school-pesantren-pesantren-modern" />
      </div>
      <div className="w-full md:w-3/4 text-center mb-3">
        <h3 className="font-poppins font-bold text-xl md:text-2xl">
          Membantu pesantren dan sekolah islam
          <span className="text-blue-600">
            {' '}
            Memanfaatkan Teknologi
          </span>
        </h3>
      </div>
      {/* paragraph */}
      <article className="w-full md:w-3/4 px-2 text-sm md:text-md text-center text-gray-500">
        <p>
          Kami mengembangkan ZIAD agar teknologi terkini dapat dimanfaatkan untuk membantu lembaga pendidikan dalam
          mempermudah proses uang pembayaran uang sekolah, absensi guru akurat sesuai jadwal, mengelola keuangan
          sekolah, mengelola SDM, memberi pelayanan terbaik untuk wali murid dll
        </p>
      </article>
    </section>
  );
}

export default AboutUsQuotes;
