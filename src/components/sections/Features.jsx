/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { features } from '@/data/data';
import { SectionTitle, Title } from '../Typography';
import FeatureSlideWrapper from '../FeatureSlideSwapper';
import { CheckIcon } from '../Icons';

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
        <section className="w-full h-[50vh] min-h-max flex justify-center items-center">
          <section className="w-3/5 bg-white shadow-lg rounded-lg grid grid-cols-2 grid-rows-4">
            {/* row 1 */}
            <div className="flex items-center gap-4 justify-center col-start-1 col-end-3 row-start-1 row-end-1">
              <div className="flex justify-center items-center gap-4">
                <CheckIcon size={16} color="#1C77FF" />
                Kantin
              </div>
              <div className="flex justify-center items-center gap-4">
                <CheckIcon size={16} color="#1C77FF" />
                Kantin
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Features;
