/* eslint-disable import/extensions */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { SectionTitle } from "../Typography";
import { clients } from "@/data/data";
import ClientsSlideWrapper from "../ClientsSlideWrapper";
import ClientsMarquee from "../ClientsMarquee";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Clients() {
  const sliceClients = (start, end) => clients.slice(start, end);

  let clientSlides = [];

  let start = 0;
  while (start < clients.length) {
    clientSlides.push(
      <ClientsSlideWrapper clients={sliceClients(start, start + 4)} />
    );
    start += 4;
  }

  return (
    <>
      <section className="w-full relative max-w-7xl mx-auto z-0">
        <ClientsMarquee />
        <SectionTitle className="my-4 md:my-8 px-4">
          Sudah membantu
          <span className="text-brand-title"> 30+ Pesantren </span>
          di Indonesia
        </SectionTitle>
        <section className="mt-8 md:mt-12 flex flex-col justify-center items-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            scrollbar={{ draggable: true }}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="w-full flex justify-center items-center"
          >
            {clientSlides.map((slide, key) => {
              return (
                <SwiperSlide key={key} className="pb-12">
                  {slide}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </section>
    </>
  );
}

export default Clients;
