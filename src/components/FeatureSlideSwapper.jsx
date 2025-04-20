import React from "react";
import CardFeatures from "./CardFeatures";

function FeatureSlideWrapper({ features }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
      {features &&
        features.map((feature) => (
          <CardFeatures
            key={feature.title}
            title={feature.title}
            imageUrl={feature.imageUrl}
          >
            {feature.desc}
          </CardFeatures>
        ))}
    </div>
  );
}

export default FeatureSlideWrapper;
