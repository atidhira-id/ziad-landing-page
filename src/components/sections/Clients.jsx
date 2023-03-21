import React from 'react';
import CardClients from '../CardClients';
import { SectionTitle } from '../Typography';

function Clients() {
  return (
    <section className="relative w-full min-h-screen h-max md:h-[90vh] mb-20">
      {/* title */}
      <SectionTitle>Our Clients</SectionTitle>
      {/* clients card */}
      <section className="w-full h-full max-h-max flex flex-col justify-center items-center md:h-2/3 gap-8 md:px-24 z-20">
        {/* row 1 */}
        <div className="flex flex-col md:flex-row gap-8">
          <CardClients>Mthq</CardClients>
          <CardClients>Daarul Qurro</CardClients>
          <CardClients>Daarul Hikmah</CardClients>
          <CardClients>Al Muhajirin</CardClients>
        </div>
        {/* row 2 */}
        <div className="flex flex-col md:flex-row gap-8">
          <CardClients>Tiara Aksara</CardClients>
          <CardClients>Ayyusufiah</CardClients>
          <CardClients>Ponpes Ziad</CardClients>
          <CardClients>Ponpes Ziad</CardClients>
        </div>
        {/* shadow */}
      </section>
      <div className="absolute w-full top-0 bottom-0 flex items-center justify-center">
        <div className="w-[900px] h-[400px] radial-gradient-shadow rounded-full blur-2xl -z-10" />
      </div>
    </section>
  )
}

export default Clients;
