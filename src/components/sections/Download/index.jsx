import React from "react";
import DownloadLink from "@/components/sections/Download/DownloadLink";
import { SectionSubTitle, SectionTitle } from "@/components/Typography";
import { SectionContainer } from "@/components/Containers";

function DownloadDemo() {
  return (
    <SectionContainer
      className="max-w-screen-lg pt-40 flex flex-col lg:flex-row"
      id="demo"
    >
      <article className="w-full lg:w-3/5 flex flex-col align-center justify-center gap-4">
        <SectionTitle className="lg:text-left lg:px-0">
          Coba
          <span className="text-blue-600"> Aplikasi</span>
          <br />
          Wali Murid
        </SectionTitle>
        <SectionSubTitle className="text-center lg:w-3/4 lg:text-left lg:m-0">
          Anda bisa langsung mencoba menggunakan Aplikasi Demo kami yang
          tersedia di PlayStore! Jika Anda tertarik dengan menggunakan Ziad
          System, Silahkan hubungi kami.
        </SectionSubTitle>
        <div className="w-full flex items-center justify-center lg:justify-start gap-8 my-4">
          <DownloadLink platforms="playstore" />
        </div>
      </article>

      <div className="hidden lg:flex grow justify-center">
        <img
          src="./demo-app-phone-mockup.png"
          alt="phone-image-apps"
          className="w-[200px] md:w-[300px]"
        />
      </div>
    </SectionContainer>
  );
}

export default DownloadDemo;
