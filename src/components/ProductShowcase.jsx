/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { motion } from 'framer-motion';
import { Title } from './Typography';

function ProductShowcase({
  children: desc, title, imgUrl, align, imgSize,
}) {
  if (align === 'left') {
    return (
      // container
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, ease: 'easeInOut' }}
        viewport={{ margin: '100px' }}
        className="w-full md:w-4/5 h-max md:min-h-[20vh] px-4 md:px-12 py-6 flex flex-col md:flex-row  jusftify-center items-center gap-8"
      >
        {/* product image */}
        <div>
          <img
            src={imgUrl || './phone-image.png'}
            alt="phone-image-apps"
            height="auto"
            className={`w-[200px] md:w-[${imgSize || 400}px]`}
          />
        </div>
        {/* product desc */}
        <article className="w-full md:w-3/4 md:mr-12">
          {/* title */}
          <div className="mb-4">
            <Title
              size="text-lg md:text-2xl"
              align="text-center md:text-left"
            >
              {title}
            </Title>
          </div>
          {/* short desc */}
          <p className="text-center md:text-left text-gray-500">
            {desc}
          </p>
        </article>
      </motion.section>
    );
  }

  return (
    // container
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ margin: '100px' }}
      className="w-full md:w-4/5 md:min-h-[25vh] h-max px-4 md:px-12 md:my-12 py-6 flex flex-col-reverse md:flex-row justify-center items-center gap-8 "
    >
      {/* product desc */}
      <article className="w-full md:w-3/4 md:mr-12">
        {/* title */}
        <div className="mb-4">
          <Title
            size="text-lg md:text-2xl"
            align="text-center md:text-left"
          >
            {title}
          </Title>
        </div>
        {/* short desc */}
        <p className="text-center md:text-left text-gray-500">
          {desc}
        </p>
      </article>
      {/* product image */}
      <div>
        <img
          src={imgUrl || './phone-image.png'}
          alt="phone-image-apps"
          height="auto"
          className="w-[200px] md:w-[400px]"
        />
      </div>
    </motion.section>
  );
}

export default ProductShowcase;
