/* eslint-disable max-len */
import React from 'react'
import Button from './Button';

function BannerContact() {
  return (
    <section className="linear-primary w-4/5 min-h-72 h-max px-4 py-8 md:py-12 mx-auto mb-12 mt-8 text-center flex flex-col md:flex-row items-center justify-center text-white rounded-lg shadow-lg">
      <article className="mb-8 md:mb-0">
        <h3 className="w-4/5 mb-4 md:mb-8 m-auto font-poppins font-bold text-lg md:text-xl text-center md:text-left">
          ZIAD Smart Education System menggunakan teknologi kekinian.
        </h3>
        <p className="w-4/5 m-auto font-light text-center md:text-left text-sm md:text-md">
          Kami terus menerapkan teknologi terbaru untuk memastikan semua lembaga pendidikan dapat
          memanfaatkannya. Teknologi ZIAD dikembangkan untuk kemudahan semua kegiatan agar lebih efektif
          dan efisien. Teknologi tersebut diantaranya
        </p>
      </article>
      <div className="mr-4">
        <Button variant="fill" color="white">
          Hubungi Kami
        </Button>
      </div>
    </section>
  )
}

export default BannerContact;
