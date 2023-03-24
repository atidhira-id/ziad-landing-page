/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import BannerProduct from '../BannerProduct';
import ProductShowcase from '../ProductShowcase';
import { SectionTitle } from '../Typography';

function Products() {
  return (
    <section className="w-full max-h-max mb-20" id="product">
      {/* title */}
      <SectionTitle>Products</SectionTitle>
      {/* banner */}
      <BannerProduct />
      {/* product showcase */}
      <section className="w-full flex flex-col justify-center items-center">
        <ProductShowcase
          title={(
            <>
              <span className="text-brand">Aplikas{' '}</span> Web
            </>
          )}
        >
          Aplikasi website yang mudah diakses untuk membantu setiap kegiatan dan administrasi guru atau karyawan.
        </ProductShowcase>
        <ProductShowcase
          title={(
            <>
              <span className="text-brand">Mobile {' '}</span> Application
            </>
          )}
          align="left"
        >
          Aplikasi android dan IOS khusus untuk setiap sekolah agar memudahkan komunikasi dan berbagi data terkini kepada wali murid sesuai kebutuhan.
        </ProductShowcase>
        <ProductShowcase
          title={(
            <span className="text-brand">Smart Card</span>
          )}
        >
          Alat SmartReader kami ciptakan untuk membaca kartu siswa dan guru untuk absen, pinjam buku, akses masuk tamu, menabung, dll.
        </ProductShowcase>
        <ProductShowcase
          title={(
            <>
              <span className="text-brand">Smart Reader {' '}</span> IoT
            </>
          )}
          align="left"
        >
          Alat SmartReader kami ciptakan untuk membaca kartu siswa dan guru untuk absen, pinjam buku, akses masuk tamu, menabung, dll.
        </ProductShowcase>
      </section>
    </section>
  )
}

export default Products;
