import React from "react";
import { SectionContainer } from "@/components/Containers";
import { SectionSubTitle, SectionTitle } from "@/components/Typography";
import { testimonials } from "@/data/data";

function Testimonials() {
  return (
    <SectionContainer className="mt-20">
      <div className="mx-auto mb-12">
        <SectionTitle className="mb-6">Testimonials</SectionTitle>
        <SectionSubTitle className="text-center">
          Solusi Administrasi Sekolah yang Terbukti — Kata Mereka
        </SectionSubTitle>
      </div>
      <div className="grid lg:grid-cols-2 border border-gray-200">
        {testimonials.map((testimony, key) => (
          <figure
            key={key}
            className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 md:p-12 border border-gray-200"
          >
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                {testimony.title}
              </h3>
              <p className="my-4">“{testimony.desc}”</p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500">
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Testimonials;
