import React from 'react';
import BannerContact from '../BannerContact';
import CardPricing from '../CardPricing';
import { SectionTitle } from '../Typography';

function Pricing() {
  return (
    <section className="w-full min-h-screen h-max mb-40">
      <div className="mb-20">
        <SectionTitle>Mulai Gunakan Sistem Kami</SectionTitle>
      </div>
      <section className="w-full max-h-max mb-40 flex flex-col md:flex-row items-center justify-center gap-10">
        <CardPricing
          name="Bulanan"
          shortDesc="Khusus untuk anak Yatim dan Duafa"
          price="0"
          type="primary"
          desc={[
            'Dapat semua fitur',
            'Bebas biaya registrasi',
            'Bebas biaya pemasangan',
            'Gratis penyesuaian kebutuhan',
            'Gratis fitur Baru',
            'Harga dapat didiskusikan',
          ]}
        />
        <CardPricing
          name="Bulanan"
          shortDesc="Per Siswa Aktif"
          price="10"
          desc={[
            'Dapat semua fitur',
            'Bebas biaya registrasi',
            'Bebas biaya pemasangan',
            'Gratis penyesuaian kebutuhan',
            'Gratis fitur Baru',
            'Harga dapat didiskusikan',
          ]}
        />
      </section>
      <section className="w-full max-h-max mb-40 flex flex-col md:flex-row items-center justify-center gap-10">
        <CardPricing
          name="Smart Reader"
          price="400"
          shortDesc="Per Unit"
          desc={[
            'Bayar Sekali',
            'Garansi Selamanya',
            'Satu alat bisa banyak fungsi',
            'Tidak ada minimal pembelian',
          ]}
        />
        <CardPricing
          name="Smart Card"
          shortDesc="Per Unit"
          price="15"
          desc={[
            'Bayar Sekali',
            'Full print dua sisi',
            'Design bebas',
            'Kartu multifungsi',
          ]}
        />
      </section>
      <BannerContact />
    </section>
  );
}

export default Pricing;
