import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, EffectCoverflow } from "swiper";
import { documentations } from "@/data/data";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SectionSubTitle, SectionTitle } from "@/components/Typography";
import { SectionContainer } from "@/components/Containers";
import {
  DocumentationMobileCard,
  DocumentationDesktopCard,
} from "@/components/sections/Documentation/DocumentationCard";

function Documentation() {
  const [slidePos, setSlidePos] = useState(0);

  return (
    <SectionContainer className="pt-40 relative z-0">
      {/* Header */}
      <div className="mb-10">
        <SectionTitle className="mb-8 md:mb-12">
          Gallery kegiatan bersama Pesantren
        </SectionTitle>
        <SectionSubTitle className="text-center">
          Dokumentasi perjalanan tim dalam membawa revolusi manajemen sekolah
          berbasis teknologi.
        </SectionSubTitle>
      </div>

      {/* Slider Mobile */}
      <div className="w-full flex md:hidden">
        <Swiper
          modules={[Pagination, Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={100}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full flex justify-center items-center"
        >
          {documentations.map((documentation, key) => {
            return (
              <SwiperSlide key={key}>
                <DocumentationMobileCard data={documentation} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Slider Desktop*/}
      <div className="w-full hidden md:flex flex-col relative z-0 sliderGradient2">
        <Swiper
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={100}
          centeredSlides={true}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          modules={[Pagination, Scrollbar, EffectCoverflow]}
          className="w-full mb-8 z-0"
          onSlideChange={(swiper) => {
            setSlidePos(swiper.activeIndex);
          }}
        >
          {documentations.map((documentation, key) => {
            return (
              <SwiperSlide
                key={key}
                className={`!w-96 !h-96 bg-center bg-cover pb-8 rounded-2xl overflow-hidden mt-4 mb-8 ${
                  slidePos == key ? "grayscale-0" : "!grayscale"
                } cursor-grab "`}
              >
                <DocumentationDesktopCard data={documentation} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <SectionTitle className="text-gray-900 !text-xl font-bold mb-4">
          {documentations[slidePos].name}
        </SectionTitle>
        <SectionSubTitle className="text-justify">
          {documentations[slidePos].desc}
        </SectionSubTitle>
      </div>
    </SectionContainer>
  );
}

export default Documentation;
