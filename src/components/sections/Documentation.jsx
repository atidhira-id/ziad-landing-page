import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, EffectCoverflow } from "swiper";
import { testimonials } from "@/data/data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SectionSubTitle, SectionTitle } from "../Typography";

function TestimonialMobileCard({ data }) {
  const { imgUrl, name, testimony } = data;
  return (
    <div className="w-full max-w-lg mx-auto flex flex-col bg-white rounded-xl border border-blue-200 overflow-hidden">
      <img
        src={imgUrl}
        alt="Tim Ziad di sekolah"
        className="w-full h-96 object-cover object-top"
      />
      <div className="basis-full p-10">
        <h3 className="font-bold text-xl mb-8">{name}</h3>
        <p className="text-gray-600 mb-4">{testimony}</p>
      </div>
    </div>
  );
}

function TestimonialDesktopCard({ data }) {
  const { imgUrl, name, testimony } = data;

  return (
    <img
      src={imgUrl}
      alt="Tim Ziad di sekolah"
      className="block w-full object-cover object-top"
    />
  );
}

function Testimonials() {
  const [slidePos, setSlidePos] = useState(0);

  return (
    <div className="pt-20 px-4 relative z-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle className="mb-8 md:mb-12 px-3 max-w-4xl mx-auto">
            Gallery kegiatan bersama Pesantren
          </SectionTitle>
          <SectionSubTitle className="px-3">
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
            className="w-full flex justify-center items-center mb-8"
          >
            {testimonials.map((testimony, key) => {
              return (
                <SwiperSlide key={key}>
                  <TestimonialMobileCard data={testimony} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Slider Desktop*/}
        <div className="w-full hidden md:flex flex-col relative z-0 mb-40 sliderGradient2">
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
            {testimonials.map((testimony, key) => {
              return (
                <SwiperSlide
                  key={key}
                  className={`!w-96 !h-96 bg-center bg-cover pb-8 rounded-2xl overflow-hidden mt-4 mb-8 ${
                    slidePos == key ? "grayscale-0" : "!grayscale"
                  } cursor-grab "`}
                >
                  <TestimonialDesktopCard data={testimony} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <SectionSubTitle className="text-gray-900 !text-xl font-bold mb-4">
            {testimonials[slidePos].name}
          </SectionSubTitle>
          <SectionSubTitle className="">
            {testimonials[slidePos].testimony}
          </SectionSubTitle>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
