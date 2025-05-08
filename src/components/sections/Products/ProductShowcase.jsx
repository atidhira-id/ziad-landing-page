import React from "react";
import { SectionSubTitle, SectionTitle } from "@/components/Typography";

function ProductShowcase({ children: desc, title, imgUrl, reverse = false }) {
  return (
    <section
      className={`w-full p-8 flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }  justify-between items-center gap-4 border border-gray-200 rounded-xl r`}
    >
      <div className="lg:basis-2/5">
        <img
          src={imgUrl}
          alt="product-image"
          className="w-full h-60 lg:h-96 object-contain"
        />
      </div>

      <article className="grow max-w-2xl">
        <SectionTitle className="!text-3xl font-bold text-center lg:text-left mb-4 px-0">
          {title}
        </SectionTitle>
        <SectionSubTitle className="text-center lg:text-left">
          {desc}
        </SectionSubTitle>
      </article>
    </section>
  );
}

export default ProductShowcase;
