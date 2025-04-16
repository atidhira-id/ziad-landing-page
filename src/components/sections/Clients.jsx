/* eslint-disable import/extensions */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { SectionTitle } from "../Typography";
import { clients } from "@/data/data";
import ClientsSlideWrapper from "../ClientsSlideWrapper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Clients() {
  const mapClientData = (start, end) =>
    clients.slice(start, end).map((client) => client);

  return (
    <section className="relative w-full max-w-7xl mx-auto mb-40 z-0">
      <SectionTitle>Sudah membantu 30+ Pesantren di Indonesia</SectionTitle>
      <section className="flex flex-col justify-center items-center">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={100}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full flex justify-center items-center"
        >
          <SwiperSlide className="pb-12">
            <ClientsSlideWrapper clients={mapClientData(0, 4)} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={mapClientData(3, 7)} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={mapClientData(6, 10)} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={mapClientData(9, 13)} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={mapClientData(11, 15)} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={mapClientData(14, 18)} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={mapClientData(17, 21)} />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={mapClientData(20, 24)} />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
}

export default Clients;
