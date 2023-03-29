import { useRef, useEffect } from 'react';
import CardClients from '../CardClients';
import { SectionTitle } from '../Typography';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ClientsSlideWrapper from '../ClientsSlideWrapper';

function Clients() {
  const clients = [
    {
      name: "Mthq",
      logo: "./client-logo-one.png"
    },
    {
      name: "Al Muhajirin",
      logo: "./client-logo-one.png"
    },
    {
      name: "Ponpes Modern",
      logo: "./client-logo-one.png"
    },
    {
      name: "Tiara Aksara",
      logo: "./client-logo-one.png"
    },
    {
      name: "Daarel Qurro",
      logo: "./client-logo-one.png"
    },
    {
      name: "Daarul Hikmah",
      logo: "./client-logo-one.png"
    },
    {
      name: "Daarul Hikmah 1",
      logo: "./client-logo-one.png"
    },
    {
      name: "Daarul Hikmah 2",
      logo: "./client-logo-one.png"
    },
    {
      name: "Daarul Hikmah 4",
      logo: "./client-logo-one.png"
    }, 
  ]

  return (
    <section className="relative w-full min-h-screen h-max md:h-[90vh] mb-20">
      {/* title */}
      <SectionTitle>Sudah membantu 30+ Pesantren di Indonesia</SectionTitle>
      {/* clients card */}
      <section className="w-full h-full max-h-max flex flex-col justify-center items-center md:h-2/3 gap-8 md:px-24 z-20">
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
          <SwiperSlide >
            <ClientsSlideWrapper clients={[
              clients[0], clients[1], clients[3], clients[4],
            ]} />
          </SwiperSlide>
          <SwiperSlide >
            <ClientsSlideWrapper clients={[
              clients[5], clients[6], clients[7], clients[8],
            ]} />
          </SwiperSlide>
        </Swiper>
        {/* shadow */}
      </section>
      <div className="absolute w-full top-0 bottom-0 flex items-center justify-center">
        <div className="w-[900px] h-[400px] radial-gradient-shadow rounded-full blur-2xl -z-10" />
      </div>
    </section>
  )
}

export default Clients;
