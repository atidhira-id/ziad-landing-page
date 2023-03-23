/* eslint-disable max-len */
import React from 'react'
import { motion } from 'framer-motion';

function BannerProduct() {
  return (
    <motion.article
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: 'easeInOut' }}
      className="linear-primary w-4/5 px-4 max-h-max min-h-[50vh] py-8 mx-auto mb-12 mt-8 grid grid-cols-2 grid-rows-1 text-center text-white rounded-lg shadow-lg"
    >
      <h3 className="mb-8 font-poppins font-bold text-xl text-center col-start-1 col-end-3 row-end-1">
        ZIAD Smart Education System menggunakan teknologi kekinian.
      </h3>
      <div className="col-start-1 col-end-1 row-start-1">
        <p className="w-4/5 m-auto font-medium text-left">
          Kami terus menerapkan teknologi terbaru untuk memastikan semua lembaga pendidikan dapat
          memanfaatkannya. Teknologi ZIAD dikembangkan untuk kemudahan semua kegiatan agar lebih efektif
          dan efisien.
        </p>
      </div>
      <div className="col-start-2 col-end-2 row-start-1">
        <p className="text-left font-light">
          1. Tagihan dan Pembayaran terintegrasi dengan BANK, Alfamart, Indomaret, Tokopedia dll.
          <br />
          <br />
          2. Kartu siswa multifungsi menggunakan SmartCard.
          <br />
          <br />
          3. Absensi guru terintegrasi dengan jadwal mengajar.
          <br />
          <br />
          4. Aplikasi mobile untuk memudahkan akses pihak sekolah dan orang tua.
        </p>
      </div>
    </motion.article>
  )
}

export default BannerProduct;
