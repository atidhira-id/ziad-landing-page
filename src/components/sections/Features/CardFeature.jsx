import { SectionSubTitle, SectionTitle } from "@/components/Typography";
import React from "react";

function CardFeatures({ children: desc, title = "title", imageUrl }) {
  return (
    <div className="w-64 h-64 lg:w-72 lg:h-72 px-4 py-6 flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200">
      {/* image */}
      <img src={imageUrl} alt="feature-image" className="w-20" />
      {/* title */}
      <SectionTitle className="w-fit font-bold !text-xl text-center">
        {title}
      </SectionTitle>
      {/* desc */}
      <div className="grow">
        <SectionSubTitle className="w-full text-sm md:text-base text-center">
          {desc}
        </SectionSubTitle>
      </div>
    </div>
  );
}

export default CardFeatures;
