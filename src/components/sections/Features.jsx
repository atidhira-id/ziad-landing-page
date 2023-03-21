/* eslint-disable max-len */
import React from 'react';
import CardFeatures from '../CardFeatures';
import { SectionTitle } from '../Typography';

function Features() {
  return (
    <section className="relative w-full min-h-[120vh] h-max mb-64">
      {/* title */}
      <div className="mb-10">
        <SectionTitle>Features</SectionTitle>
      </div>
      <section className="w-full h-max z-20 ">
        {/* row 1 */}
        <div className="w-full h-max flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <CardFeatures title="Otomasi Pembayaran">
            memudahkan penerimaan pembayaran dan memudahkan wali santri membayar tagihan
          </CardFeatures>
          <CardFeatures title="Absensi Terintegrasi">
            memudahkan memantau keaktifan guru dan santri
          </CardFeatures>
          <CardFeatures title="Keuangan">
            mengelola keuangan agar data rapi dan mengurangi kesalahan pencatatan
          </CardFeatures>
          <CardFeatures title="Administrasi">
            mengelola seluruh data agar mudah diakses dan dibagikan
          </CardFeatures>
        </div>
        {/* row 2 */}
        <div className="w-full h-max flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="flex items-center justify-center bg-white">
            <CardFeatures title="Sistem Nilai">
              digitalisasi nilai mengurangi penggunaan kertas dan memudahkan akses nilai santri
            </CardFeatures>
          </div>
          <div className="flex items-center justify-center bg-white">
            <CardFeatures title="Smart Card">
              kartu multifungsi yang dapat memudahkan semua kegiatan pesantren dan sekolah islam
            </CardFeatures>
          </div>
          <div className="flex items-center justify-center bg-white">
            <CardFeatures title="Aplikasi Android">
              setiap pesantren kami buatkan aplikasi android khusus yang memudahkan wali santri dan meningkatkan reputasi pesantren
            </CardFeatures>
          </div>
          <div className="flex items-center justify-center bg-white">
            <CardFeatures title="Tabungan">
              tidak perlu lagi menggunakan buku tabungan yang dicatat manual
            </CardFeatures>
          </div>
        </div>
        <div className="absolute w-full top-0 bottom-0 flex items-center justify-center">
          <div className="w-[900px] h-[700px] radial-gradient-shadow rounded-full blur-2xl -z-10" />
        </div>
      </section>
    </section>
  )
}

export default Features;
