/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { features } from '@/data/data';
import { SectionTitle } from '../Typography';
import FeatureSlideWrapper from '../FeatureSlideSwapper';
import CardOtherFeatures from '../CardOtherFeatures';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Features() {
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
        <SectionTitle>Fitur Pelengkap</SectionTitle>
        <section className="w-full  h-[65vh] min-h-max flex justify-center items-center gap-8">
          <CardOtherFeatures
            desc={['Feature desc 1', 'Feature desc 2', 'Feature desc 3', 'Feature desc 4']}
            title="Kantin"
            imageUrl="./payment-icon.png"
          />
          <CardOtherFeatures
            desc={['Feature desc 1', 'Feature desc 2', 'Feature desc 3', 'Feature desc 4']}
            title="Perpustakaan"
            imageUrl="./payment-icon.png"
          />
        </section>
      </section>
    </section>
  );
}

export default Features;
