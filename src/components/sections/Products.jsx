/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';
import ProductShowcase from '../ProductShowcase';
import { SectionTitle } from '../Typography';

function Products() {
  return (
    <section className="w-full max-h-max mb-20" id="product">
      {/* title */}
      <SectionTitle>Teknologi Unggulan</SectionTitle>
      {/* product showcase */}
      <section className="w-full flex flex-col justify-center items-center">
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
            <>
              <span className="text-brand">Dashboard{' '}</span> Admin
            </>
          )}
          imgUrl="./dashboard-image.png"
          imgSize="500"
        >
          Aplikasi website yang mudah diakses untuk membantu setiap kegiatan dan administrasi guru atau karyawan.
        </ProductShowcase>
        <ProductShowcase
          title={(
            <span>
              <span className="text-brand">
                Smart Card
              </span>
              {' '}Cashless
            </span>
          )}
          imgUrl="./card-mockup.png"
          align="left"
        >
          Alat SmartCard ini dapat membantu santri dalam melakukan transaksi tanpa perlu menggunakan uang fisik.
        </ProductShowcase>
        <ProductShowcase
          title={(
            <>
              <span className="text-brand">Smart Reader {' '}</span> IoT
            </>
          )}
          imgUrl="./smart-reader-image.png"
        >
          Alat SmartReader dapat membantu proses administratif maupun transaksi siswa dan guru menjadi lebih mudah hanya dengan sekali tap saja.
        </ProductShowcase>
      </section>
    </section>
  );
}

export default Products;
