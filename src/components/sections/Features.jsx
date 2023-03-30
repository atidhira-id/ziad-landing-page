/* eslint-disable max-len */
import React from 'react';
import CardFeatures from '../CardFeatures';
import { SectionTitle } from '../Typography';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper'
import FeatureSlideWrapper from '../FeatureSlideSwapper';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Features() {
  const features = [
    {
      title: "Otomasi pembayaran",
      imageUrl: "./payment-icon.png",
      desc: "memudahkan penerimaan pembayaran dan memudahkan wali santri membayar tagihan",
    },
    {
      title: "Otomasi Pembayaran",
      imageUrl: "./payment-icon.png",
      desc: "memudahkan penerimaan pembayaran dan memudahkan wali santri membayar tagihan",
    },
    {
      title: "Absensi Terintegrasi",
      imageUrl: "./file-icon.png",
      desc: "memudahkan memantau keaktifan guru dan santri",
    },
    {
      title: "Keuangan",
      imageUrl: "./money-icon.png",
      desc: "mengelola keuangan agar data rapi dan mengurangi kesalahan pencatatan",
    },
    {
      title: "Administrasi",
      imageUrl: "./file-icon.png",
      desc: "mengelola seluruh data agar mudah diakses dan dibagikan",
    },
    {
      title: "Administrasi",
      imageUrl: "./file-icon.png",
      desc: "mengelola seluruh data agar mudah diakses dan dibagikan",
    },
    {
      title: "Administrasi",
      imageUrl: "./file-icon.png",
      desc: "mengelola seluruh data agar mudah diakses dan dibagikan",
    },
    {
      title: "Administrasi",
      imageUrl: "./file-icon.png",
      desc: "mengelola seluruh data agar mudah diakses dan dibagikan",
    },
  ]
  return (
    <section className="relative w-full min-h-[100vh] h-max mb-44" id="features">
      {/* title */}
      <div className="mb-10">
        <SectionTitle>Fitur Unggulan</SectionTitle>
      </div>
      <section className="w-full h-max z-20 ">
        <div className="w-full h-max flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            scrollbar={{ draggable: true }}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80vw',
              maxWidth: '100vw',
            }}
          >
            <SwiperSlide>
              <FeatureSlideWrapper features={
                [
                  features[0], features[1], features[2]
                ]
              } />
            </SwiperSlide>
            <SwiperSlide>
              <FeatureSlideWrapper features={
                [
                  features[3], features[4], features[5]
                ]
              } />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute w-full top-0 bottom-0 flex items-center justify-center">
          <div className="w-[900px] h-[700px] radial-gradient-shadow rounded-full blur-2xl -z-10" />
        </div>
      </section>
    </section>
  )
}

export default Features;
