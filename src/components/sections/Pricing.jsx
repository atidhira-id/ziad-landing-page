import React from "react";
import CardPricing from "../CardPricing";
import { SectionTitle } from "../Typography";

function Pricing() {
  return (
    <section className="w-5/6 max-w-7xl mx-auto pt-20">
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
    </section>
  );
}

export default Pricing;
