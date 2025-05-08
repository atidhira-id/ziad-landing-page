import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import { features } from "@/data/data";
import { SectionTitle } from "@/components/Typography";
import FeatureSlideWrapper from "@/components/sections/Features/FeatureSlideWrapper";
import CardFeatures from "@/components/sections/Features/CardFeature";
import CardOtherFeatures from "@/components/sections/Features/CardOtherFeature";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionContainer } from "@/components/Containers";

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
      <SectionContainer className="relative pt-40 z-0" id="features">
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
      </SectionContainer>

      <SectionContainer className="bg-gray-50">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center p-8">
          <div className="lg:basis-1/2">
            <img
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
      </SectionContainer>
    </>
  );
}

export default Features;
