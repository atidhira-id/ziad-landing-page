import React from "react";
import CardPricing from "@/components/sections/Pricing/CardPricing";
import { SectionTitle } from "@/components/Typography";
import { SectionContainer } from "@/components/Containers";

function Pricing() {
  return (
    <SectionContainer className="pt-40">
      <SectionTitle className="mb-8 md:mb-12">
        Mulai Gunakan Sistem Kami
      </SectionTitle>
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 mb-10 flex-wrap">
        <CardPricing
          name="Bulanan"
          shortDesc="Khusus untuk anak Yatim dan Duafa"
          price="0"
          type="primary"
          desc={[
            "Dapat semua fitur",
            "Bebas biaya registrasi",
            "Bebas biaya pemasangan",
            "Gratis penyesuaian kebutuhan",
            "Gratis fitur Baru",
            "Harga dapat didiskusikan",
          ]}
        />
        <CardPricing
          name="Bulanan"
          shortDesc="Per Siswa Aktif"
          price="15"
          desc={[
            "Dapat semua fitur",
            "Bebas biaya registrasi",
            "Bebas biaya pemasangan",
            "Gratis penyesuaian kebutuhan",
            "Gratis fitur Baru",
            "Harga dapat didiskusikan",
            "Harga khusus hubungi team Marketing",
          ]}
        />
        <CardPricing
          name="Smart Reader"
          price="400"
          shortDesc="Per Unit"
          desc={[
            "Bayar Sekali",
            "Garansi Selamanya",
            "Satu alat bisa banyak fungsi",
            "Tidak ada minimal pembelian",
          ]}
        />
        <CardPricing
          name="Smart Card"
          shortDesc="Per Unit"
          price="15"
          desc={[
            "Bayar Sekali",
            "Full print dua sisi",
            "Design bebas",
            "Kartu multifungsi",
          ]}
        />
      </section>
    </SectionContainer>
  );
}

export default Pricing;
