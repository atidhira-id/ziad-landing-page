import React from "react";
import CardFeature from "@/components/sections/Features/CardFeature";

function FeatureSlideWrapper({ features }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
      {features &&
        features.map((feature) => (
          <CardFeature
            key={feature.title}
            title={feature.title}
            imageUrl={feature.imageUrl}
          >
            {feature.desc}
          </CardFeature>
        ))}
    </div>
  );
}

export default FeatureSlideWrapper;
