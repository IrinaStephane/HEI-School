import React from "react";
import { Container } from "./Container";
import { partners } from "../constants";

const Partner = () => {
  return (
    <div className="bg-white w-full py-16">
      <Container>
        <h2 className="font-serif text-primary text-4xl md:text-5xl font-bold text-center mb-4">
          Nos partenaires
        </h2>
        <p className="text-[#0a2657] text-center text-base md:text-lg max-w-4xl mx-auto mb-12">
          L’employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires
        </p>
        <div className="flex flex-col gap-10 items-center w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-8 w-full justify-items-center">
            {partners.slice(0, 5).map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-14 md:h-20 w-auto object-contain"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 w-full justify-items-center">
            {partners.slice(5).map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-14 md:h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partner;
