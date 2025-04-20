import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { testimonials } from "@/data/data";

import "swiper/css";
import "swiper/css/navigation";
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
        <p className="text-gray-600 mb-4">"{testimony}"</p>
      </div>
    </div>
  );
}

function TestimonialDesktopCard({ data }) {
  const { imgUrl, name, testimony } = data;

  return (
    <div className="w-full md:flex justify-center overflow-hidden">
      <img
        src={imgUrl}
        alt="Tim Ziad di sekolah"
        className="basis-2/5 h-96 object-contain object-top"
      />
      <div className="basis-1/2 pl-12 pr-6 py-6">
        <h3 className="font-bold text-3xl mb-12">{name}</h3>
        <p className="text-lg text-gray-600 mb-4">"{testimony}"</p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="pt-20 px-4 relative z-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle className="mb-8 md:mb-12 px-3 max-w-3xl mx-auto">
            Tim Kami Telah Memperkenalkan Ziad ke
            <span className="text-blue-600"> 30+ Pesantren</span>
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
        <div className="w-full hidden md:flex">
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
                <SwiperSlide key={key} className="pb-8">
                  <TestimonialDesktopCard data={testimony} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
