/* eslint-disable max-len */
import React from 'react'

function BannerProduct() {
  return (
    <article className="linear-primary w-4/5 px-4 py-12 12 mx-auto mb-12 mt-8 text-center text-white rounded-lg shadow-lg">
      <h3 className="font-poppins mb-8 font-bold text-xl text-center">
        ZIAD Smart Education System menggunakan teknologi kekinian.
      </h3>
      <p className="w-4/5 m-auto font-light">
        Kami terus menerapkan teknologi terbaru untuk memastikan semua lembaga pendidikan dapat
        memanfaatkannya. Teknologi ZIAD dikembangkan untuk kemudahan semua kegiatan agar lebih efektif
        dan efisien.
      </p>
      <div className="flex justify-center items-center">
        <p className="text-left">
          1. Tagihan dan Pembayaran terintegrasi dengan BANK, Alfamart, Indomaret, Tokopedia dll.
          <br />
          2. Kartu siswa multifungsi menggunakan SmartCard.
        </p>
        <p className="text-left">
          3. Absensi guru terintegrasi dengan jadwal mengajar.
          <br />
          4. Aplikasi mobile untuk memudahkan akses pihak sekolah dan orang tua.
        </p>
      </div>
    </article>
  )
}

export default BannerProduct;
