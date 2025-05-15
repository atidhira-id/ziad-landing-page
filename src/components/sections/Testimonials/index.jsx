import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import { SectionContainer } from "@/components/Containers";
import { SectionTitle } from "@/components/Typography";
import { testimonials } from "@/data/data";
import { FaRegUser } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <SectionContainer className="mt-20 flex flex-col lg:flex-row items-center gap-4 lg:px-4">
      <div className="w-full lg:w-1/2 lg:flex flex-col">
        <SectionTitle className="mb-6">Apa Kata Mereka?</SectionTitle>
        <img
          src="./testimony-ilustration.png"
          alt="testimony"
          className="hidden lg:block h-72 object-contain"
        />
      </div>

      <div className="flex w-full lg:w-1/2">
        <Swiper
          modules={[Pagination, Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={100}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full flex justify-center items-center"
        >
          {testimonials.map((testimony, key) => (
            <SwiperSlide key={key} className="py-8">
              <figure className="w-full h-full flex flex-col justify-center items-center text-center p-3 bg-gray-50 md:p-12 border border-gray-200 rounded-xl">
                <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimony.title}
                  </h3>
                  <p className="my-4">“{testimony.desc}”</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                  <div className="bg-gray-400 w-12 h-12 rounded-full flex justify-center items-center">
                    <FaRegUser size={24} className="text-gray-50" />
                  </div>
                  <div className="space-y-0.5 font-medium text-left">
                    <p>{testimony.name}</p>
                    <p className="text-sm font-light text-gray-500">
                      {testimony.position}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
}

export default Testimonials;
