import React from "react";
import ProductShowcase from "@/components/sections/Products/ProductShowcase";
import { SectionTitle } from "@/components/Typography";
import { SectionContainer } from "@/components/Containers";

function Products() {
  return (
    <SectionContainer className="pt-40 z-0" id="product">
      <SectionTitle className="mb-8 md:mb-12">Teknologi Unggulan</SectionTitle>
      <section className="w-full flex flex-col justify-center items-center gap-8">
        <ProductShowcase
          title={
            <>
              <span className="text-brand">Mobile </span> Application
            </>
          }
          imgUrl="./phone-image.png"
        >
          Aplikasi android dan IOS khusus untuk setiap sekolah agar memudahkan
          komunikasi dan berbagi data terkini kepada wali murid sesuai
          kebutuhan.
        </ProductShowcase>
        <ProductShowcase
          title={
            <>
              <span className="text-brand">Dashboard </span> Admin
            </>
          }
          imgUrl="./dashboard-image.png"
          reverse
        >
          Aplikasi website yang mudah diakses untuk membantu setiap kegiatan dan
          administrasi guru atau karyawan.
        </ProductShowcase>
        <ProductShowcase
          title={
            <span>
              <span className="text-brand">Smart Card</span> Cashless
            </span>
          }
          imgUrl="./card-mockup.png"
          align="left"
        >
          Alat SmartCard ini dapat membantu santri dalam melakukan transaksi
          tanpa perlu menggunakan uang fisik.
        </ProductShowcase>
        <ProductShowcase
          title={
            <>
              <span className="text-brand">Smart Reader </span> IoT
            </>
          }
          imgUrl="./smart-reader-image.png"
          reverse
        >
          Alat SmartReader dapat membantu proses administratif maupun transaksi
          siswa dan guru menjadi lebih mudah hanya dengan sekali tap saja.
        </ProductShowcase>
      </section>
    </SectionContainer>
  );
}

export default Products;
