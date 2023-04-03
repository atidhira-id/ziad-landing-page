/* eslint-disable import/extensions */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { SectionTitle } from '../Typography';
import { clients } from '@/data/data';
import ClientsSlideWrapper from '../ClientsSlideWrapper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Clients() {
  return (
    <section className="relative w-full min-h-[75vh] h-max md:h-[90vh] mb-20">
      {/* title */}
      <SectionTitle>Sudah membantu 30+ Pesantren di Indonesia</SectionTitle>
      {/* clients card */}
      <section className="w-full h-full max-h-max mt:6 md:mt-12 flex flex-col justify-center items-center md:h-2/3 gap-8 md:px-24 z-20">
        {/* row 1 */}
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
            <ClientsSlideWrapper clients={[
              clients[0], clients[1], clients[3], clients[4],
            ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={[
              clients[5], clients[6], clients[7], clients[8],
            ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientsSlideWrapper clients={[
              clients[9], clients[10], clients[10], clients[10],
            ]}
            />
          </SwiperSlide>
        </Swiper>
        {/* shadow */}
      </section>
      <div className="absolute w-full top-0 bottom-0 flex items-center justify-center">
        <div className="w-[900px] h-[400px] radial-gradient-shadow rounded-full blur-2xl -z-10" />
      </div>
    </section>
  );
}

export default Clients;
