/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import DownloadLink from '../DownloadLink';
import { SectionTitle } from '../Typography';
import Button from '../Button';

function DownloadDemo() {
  return (
    // container
    <>
      <section className="w-full h-max px-4 md:px-12 py-12 flex flex-col justify-center items-center">
        <SectionTitle>Mau Mencoba Sistem Kami?</SectionTitle>
        <div className="flex gap-4">
          <Link href="http://wa.me/6287776669010">
            <Button variant="fill" color="blue">Request Akun demo</Button>
          </Link>
          <Link href="#demo">
            <Button variant="fill" color="blue">Coba Aplikasi Mobile</Button>
          </Link>
        </div>
      </section>
      <section className="w-[90vw] h-max px-4 md:px-12 py-12 flex flex-col md:flex-row justify-center items-center " id="demo">
        {/* product desc */}
        <article className="w-full md:w-3/5 pl-12 flex flex-col align-start justify-center gap-4">
          {/* title */}
          <h3 className="w-full mb-4 font-bold text-5xl text-center md:text-left">
            Download
            <span className="text-blue-600"> Demo</span>
            <br />
            <span className="text-blue-600"> App</span>
          </h3>
          {/* short desc */}
          <p className="w-full md:w-3/4 text-center md:text-left text-gray-500">
            Anda bisa langsung mencoba menggunakan Aplikasi Demo kami yang tersedia di PlayStore! Jika Anda tertarik dengan menggunakan Ziad System, Silahkan hubungi kami.
          </p>
          <div className="w-full flex items-center justify-center md:justify-start gap-8 my-2">
            {/* download link */}
            <DownloadLink platforms="appstore" />
            <DownloadLink platforms="playstore" />
          </div>
        </article>
        {/* product image on desktop */}
        <div className="hidden md:block">
          <img src="./phone-image.png" alt="phone-image-apps" height="auto" className="w-[200px] md:w-[400px]" />
        </div>
      </section>
    </>
  );
}

export default DownloadDemo;
