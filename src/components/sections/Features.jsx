/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { motion } from 'framer-motion';
import { features } from '@/data/data';
import { SectionTitle } from '../Typography';
import FeatureSlideWrapper from '../FeatureSlideSwapper';
import CardOtherFeatures from '../CardOtherFeatures';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Features() {
  const featureList = [
    'Administrasi',
    'Berita Sekolah',
    'Kasir Cepat',
    'Kepegawaian',
    'Kesiswaan',
    'Keuangan',
    'Minimarket',
    'Nilai',
    'Pengaturan',
    'Pengguna',
    'Perpustakaan',
    'PPDB/PSB',
    'Sekolah',
    'Toko',
    'UKS',
  ];

  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[90vh] h-max mb-44" id="features">
      {/* title */}
      <div className="mb-10">
        <SectionTitle>Fitur Unggulan</SectionTitle>
      </div>
      <section className="w-full h-max z-20 ">
        <div className="hidden md:flex w-full h-max flex-col md:flex-row items-center justify-center gap-8 mb-20">
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
              width: '95vw',
              maxWidth: '100vw',
            }}
          >
            <SwiperSlide>
              <FeatureSlideWrapper features={[features[0], features[1], features[2], features[3]]} />
            </SwiperSlide>
            <SwiperSlide>
              <FeatureSlideWrapper features={[features[4], features[5], features[6], features[7]]} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex md:hidden w-full h-max flex-col md:flex-row items-center justify-center gap-8 mb-20">
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
              <FeatureSlideWrapper features={[features[0], features[1]]} />
            </SwiperSlide>
            <SwiperSlide>
              <FeatureSlideWrapper features={[features[2], features[3]]} />
            </SwiperSlide>
            <SwiperSlide>
              <FeatureSlideWrapper features={[features[4], features[5]]} />
            </SwiperSlide>
            <SwiperSlide>
              <FeatureSlideWrapper features={[features[6], features[7]]} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute w-full top-0 bottom-0 flex items-center justify-center">
          <div className="w-[900px] h-[700px] radial-gradient-shadow rounded-full blur-2xl -z-10" />
        </div>
        <section className="w-full flex flex-col justify-center items-center">
          <motion.section
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, ease: 'easeInOut' }}
            viewport={{ margin: '100px' }}
            className="w-full md:w-4/5 h-max md:min-h-[20vh] px-4 md:px-12 py-6 flex flex-col jusftify-center items-center gap-8 bg-white rounded-md shadow-xl"
          >
            <SectionTitle>Fitur Lengkap</SectionTitle>
            <div className="mr-4 flex flex-col md:flex-row items-center justify-center">
              <img
                src="./dashboard-image.png"
                alt="phone-image-apps"
                height="auto"
                className="w-[200px] md:w-[400px]"
              />
              <CardOtherFeatures
                row1={featureList.slice(0, 7)}
                row2={featureList.slice(7, 14)}
              />
            </div>
          </motion.section>
        </section>
      </section>
    </section>
  );
}

export default Features;
