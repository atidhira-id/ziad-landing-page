/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import { features } from "@/data/data";
import { SectionTitle } from "../Typography";
import FeatureSlideWrapper from "../FeatureSlideSwapper";
import CardFeatures from "../CardFeatures";
import CardOtherFeatures from "../CardOtherFeatures";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Features() {
  const featureList = [
    "Administrasi",
    "Berita Sekolah",
    "Kasir Cepat",
    "Kepegawaian",
    "Kesiswaan",
    "Keuangan",
    "Minimarket",
    "Nilai",
    "Pengaturan",
    "Pengguna",
    "Perpustakaan",
    "PPDB/PSB",
    "Sekolah",
    "Toko",
    "UKS",
  ];

  return (
    <>
      <section
        className="relative w-full max-w-7xl mx-auto pt-20 z-0"
        id="features"
      >
        <SectionTitle className="mb-8 md:mb-12">Fitur Unggulan</SectionTitle>

        <section className="w-full">
          {/* Desktop */}
          <div className="hidden md:flex w-full flex-row items-center justify-center flex-wrap gap-4 mb-20 px-4">
            {features.map((feature, key) => {
              return (
                <CardFeatures
                  key={key}
                  title={feature.title}
                  imageUrl={feature.imageUrl}
                >
                  {feature.desc}
                </CardFeatures>
              );
            })}
          </div>
          {/* Mobile */}
          <div className="flex md:hidden w-full h-max flex-col md:flex-row items-center justify-center gap-8 mb-20">
            <Swiper
              modules={[Pagination, Scrollbar]}
              scrollbar={{ draggable: true }}
              spaceBetween={100}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full flex justify-center items-center"
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
        </section>
      </section>
      <section className="w-5/6 max-w-7xl mx-auto py-4 flex flex-col justify-center items-center rounded-2xl bg-gray-50">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center p-4">
          <div className="lg:basis-1/2">
            <Image
              src="./dashboard-image.png"
              alt="phone-image-apps"
              height={600}
              width={600}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionTitle className="mt-8 mb-8 lg:mt-0">
              Fitur Lengkap
            </SectionTitle>
            <CardOtherFeatures
              row1={featureList.slice(0, 7)}
              row2={featureList.slice(7, 14)}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
