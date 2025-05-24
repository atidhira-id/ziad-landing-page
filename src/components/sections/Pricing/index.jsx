import React from "react";
import CardPricing from "@/components/sections/Pricing/CardPricing";
import { SectionTitle } from "@/components/Typography";
import { SectionContainer } from "@/components/Containers";
import { pricing } from "@/data/data";

function Pricing() {
  return (
    <SectionContainer className="pt-40">
      <SectionTitle className="mb-8 md:mb-12">
        Mulai Gunakan Sistem Kami
      </SectionTitle>
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 mb-10 flex-wrap">
        {pricing.map((item, key) => {
          return (
            <CardPricing
              key={key}
              name={item.name}
              type={item.type || ""}
              price={item.price}
              shortDesc={item.shordDesc}
              desc={item.desc}
            />
          );
        })}
      </section>
    </SectionContainer>
  );
}

export default Pricing;
