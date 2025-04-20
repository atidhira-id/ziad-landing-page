/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import DownloadLink from "../DownloadLink";
import { SectionSubTitle, SectionTitle } from "../Typography";

function DownloadDemo() {
  return (
    <>
      <section
        className="w-5/6 max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-center items-start"
        id="demo"
      >
        <article className="w-full lg:w-3/5 flex flex-col align-center justify-center gap-4">
          <SectionTitle className="lg:text-left">
            Coba
            <span className="text-blue-600"> Aplikasi</span>
            <br />
            Wali Murid
          </SectionTitle>
          <SectionSubTitle className="lg:w-3/4 lg:text-left lg:m-0">
            Anda bisa langsung mencoba menggunakan Aplikasi Demo kami yang
            tersedia di PlayStore! Jika Anda tertarik dengan menggunakan Ziad
            System, Silahkan hubungi kami.
          </SectionSubTitle>
          <div className="w-full flex items-center justify-center lg:justify-start gap-8 my-4">
            {/* download link */}
            <DownloadLink platforms="appstore" />
            <DownloadLink platforms="playstore" />
          </div>
        </article>
        {/* product image on desktop */}
        <div className="hidden lg:block">
          <img
            src="./demo-app-phone-mockup.png"
            alt="phone-image-apps"
            height="auto"
            className="w-[200px] md:w-[300px]"
          />
        </div>
      </section>
    </>
  );
}

export default DownloadDemo;
