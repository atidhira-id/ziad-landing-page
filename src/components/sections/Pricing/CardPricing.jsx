import React from "react";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/Icons";

function CardPricing({ type, shortDesc, desc, price, name, discount }) {
  if (type === "primary") {
    return (
      <div className="w-72 h-[540px] flex flex-col items-center px-8 pt-4 pb-6 bg-blue-700 rounded-lg gap-4 border border-blue-200">
        <div className="basis-1/3 flex flex-col items-center justify-center gap-2">
          {/* desc */}
          <span className="font-light text-xs text-center uppercase text-white">
            {name}
          </span>
          {/* price */}
          <h1 className="text-4xl font-bold text-white">{`Rp ${price}K`}</h1>
          {/* desc */}
          <span className="w-3/4 font-light text-xs text-center text-gray-200">
            {shortDesc}
          </span>
        </div>

        <ul className="grow w-full flex flex-col items-start justify-start text-left gap-3">
          {desc &&
            desc.map((dsc, key) => (
              <li
                key={key}
                className="w-full text-sm text-white flex items-center gap-2"
              >
                <CheckIcon size={16} />
                <span>{dsc}</span>
              </li>
            ))}
        </ul>

        <a href="http://wa.me/6287776669010" target="_blank" className="w-full">
          <Button theme="white" className="w-full">
            Langganan
          </Button>
        </a>
      </div>
    );
  }

  return (
    <div className="w-72 h-[540px] flex flex-col items-center px-8 pt-4 pb-6 bg-white rounded-lg gap-4 border border-blue-200">
      <div className="basis-1/3 flex flex-col items-center justify-center gap-2">
        {/* desc */}
        <span className="font-light text-xs text-center uppercase text-gray-700">
          {name}
        </span>
        {/* price */}
        <h1 className="text-4xl font-bold text-blue-700">
          {discount ? (
            <>
              <span className="line-through">{`Rp ${price}K `}</span>
              {`${discount}K`}
            </>
          ) : (
            <>{`Rp ${price}K`}</>
          )}
        </h1>
        {/* add on desc */}
        <span className="w-3/4 font-light text-xs text-center text-gray-600">
          {shortDesc}
        </span>
      </div>
      <ul className="grow w-full flex flex-col items-start justify-start text-left gap-3">
        {desc &&
          desc.map((dsc) => (
            <li
              key={dsc}
              className="w-full text-sm text-gray-700 flex items-center gap-2"
            >
              <CheckIcon size={16} color="#1C77FF" />
              <span>{dsc}</span>
            </li>
          ))}
      </ul>
      <a href="http://wa.me/6287776669010" target="_blank" className="w-full">
        <Button theme="blue" className="w-full">
          Langganan
        </Button>
      </a>
    </div>
  );
}

export default CardPricing;
