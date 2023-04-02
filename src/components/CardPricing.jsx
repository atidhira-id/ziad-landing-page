/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from './Button';
import { CheckIcon } from './Icons';

function CardPricing({
  type, shortDesc, desc, price, name,
}) {
  if (type === 'primary') {
    return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true, margin: '100px' }}
        className="min-h-[45vh] md:min-h-[75vh] max-h-max flex flex-col items-center px-10 py-10 bg-brand rounded-lg shadow-xl"
      >
        <article className="mb-9 flex flex-col items-center justify-center">
          {/* desc */}
          <span className="mb-3 font-light text-xs text-center text-white opacity-75 uppercase">
            {name}
          </span>
          {/* price */}
          <h1 className="text-4xl font-bold font-poppins text-white mb-3">
            {`Rp${price}K`}
          </h1>
          {/* add on desc */}
          <span className="w-3/4 font-light text-xs text-center text-gray-200 opacity-75">
            {shortDesc}
          </span>
        </article>
        <ul className="grow w-full flex flex-col items-start justify-start md:items-center text-left">
          {desc && desc.map((dsc) => (
            <li key={dsc} className="w-full text-sm text-white mb-3 flex items-center gap-2">
              <CheckIcon size={16} />
              <span>
                {dsc}
              </span>
            </li>
          ))}
        </ul>
        <Link href="http://wa.me/6287776669010">
          <Button variant="fill" color="white">Langganan</Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true, margin: '100px' }}
      className="min-h-[70vh] min-w-[20rem] max-h-max flex flex-col items-center px-7 py-8 bg-white rounded-lg shadow-xl"
    >
      <article className="mb-9 flex flex-col items-center justify-center">
        {/* desc */}
        <span className="mb-3 font-light text-xs text-center text-gray-700 opacity-75 uppercase">
          {name}
        </span>
        {/* price */}
        <h1 className="text-4xl font-bold font-poppins text-brand mb-3">
          {`Rp${price}K`}
        </h1>
        {/* add on desc */}
        <span className="w-3/4 font-light text-xs text-center text-gray-600 opacity-75">
          {shortDesc}
        </span>
      </article>
      <ul className="grow w-full flex flex-col items-start justify-start text-left md:items-center">
        {desc && desc.map((dsc) => (
          <li key={dsc} className="w-full text-sm text-gray-700 mb-3 flex items-center gap-2">
            <CheckIcon size={16} color="#1C77FF" />
            <span>
              {dsc}
            </span>
          </li>
        ))}
      </ul>
      <Link href="http://wa.me/6287776669010">
        <Button variant="fill" color="white">Langganan</Button>
      </Link>
    </motion.div>
  );
}

export default CardPricing;
