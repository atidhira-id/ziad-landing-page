/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Title } from "./Typography";

function ProductShowcase({ children: desc, title, imgUrl, align, imgSize }) {
  if (align === "left") {
    return (
      <section className="w-5/6 p-4 flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-200 rounded-3xl">
        {/* product image */}
        <div>
          <img src={imgUrl} alt="product-image" className="w-56 md:w-72" />
        </div>
        {/* product desc */}
        <article className="w-full md:w-3/5">
          {/* title */}
          <div className="mb-4">
            <Title size="text-lg md:text-2xl" align="text-center md:text-left">
              {title}
            </Title>
          </div>
          {/* short desc */}
          <p className="text-center md:text-left text-gray-600">{desc}</p>
        </article>
      </section>
    );
  }

  return (
    <section className="w-5/6 px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-200 rounded-3xl">
      {/* product desc */}
      <article className="w-full md:w-1/2">
        {/* title */}
        <div className="mb-4">
          <Title size="text-lg md:text-2xl" align="text-center md:text-left">
            {title}
          </Title>
        </div>
        {/* short desc */}
        <p className="text-center md:text-left text-gray-600">{desc}</p>
      </article>
      {/* product image */}
      <div>
        <img src={imgUrl} alt="product-image" className="w-56 md:w-72" />
      </div>
    </section>
  );
}

export default ProductShowcase;
