import React from "react";
import { Container } from "./Container";
import assets from "../image/assets";

const Pedagogie = () => {
  return (
    <div className="bg-white w-full py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {/* Bloc image + fond */}
          <div className="relative w-full max-w-[480px] min-w-[320px] h-[370px] flex-shrink-0 mb-8 lg:mb-0">
            <img
              src={assets.Mask_group_4}
              alt="Programme pédagogique"
              className="relative z-10 w-full h-full object-contain"
              draggable="false"
            />
          </div>
          {/* Bloc texte */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
            <h2 className="text-primary text-5xl font-serif font-bold mb-6 text-left">Le programme pédagogique</h2>
            <p className="text-primary text-lg mb-8 text-left">
              Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
            </p>
            <button className="px-8 py-3 border-2 border-primary text-primary text-lg font-bold rounded bg-white hover:bg-primary hover:text-white transition">
              Notre Programme
            </button>
          </div>
        </div>
      </Container>
      {/* Section 25% + images */}
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#FAF0D6] rounded-xl flex flex-col items-start justify-center px-7 py-7 min-h-[140px] md:min-h-[240px]">
            <span className="text-secondary text-3xl md:text-5xl font-semibold mb-6">25%</span>
            <span className="text-primary text-lg md:text-2xl font-semibold leading-tight">
              Apprentissage<br />théoriques<br />en présentiel
            </span>
          </div>
          <div className="bg-[#FAF0D6] rounded-xl flex flex-col items-start justify-center px-7 py-7 min-h-[140px] md:min-h-[240px]">
            <span className="text-secondary text-3xl md:text-5xl font-semibold mb-6">25%</span>
            <span className="text-primary text-lg md:text-2xl font-semibold leading-tight">
              Apprentissage<br />sur supports numériques
            </span>
          </div>
          <div className="bg-[#FAF0D6] rounded-xl flex flex-col items-start justify-center px-7 py-7 min-h-[140px] md:min-h-[240px]">
            <span className="text-secondary text-3xl md:text-5xl font-semibold mb-6">25%</span>
            <span className="text-primary text-lg md:text-2xl font-semibold leading-tight">
              Travaux<br />individuels<br />de l’étudiant
            </span>
          </div>
          <div className="bg-[#FAF0D6] rounded-xl flex flex-col items-start justify-center px-7 py-7 min-h-[140px] md:min-h-[240px]">
            <span className="text-secondary text-3xl md:text-5xl font-semibold mb-6">25%</span>
            <span className="text-primary text-lg md:text-2xl font-semibold leading-tight">
              Apprentissage<br />en entreprise
            </span>
          </div>
        </div>
        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={assets.Mask_group_1} alt="apprentissage 1" className="rounded-xl object-cover w-full h-[400px] md:h-[370px]" />
          <img src={assets.Mask_group_2} alt="apprentissage 2" className="rounded-xl object-cover w-full h-[400px] md:h-[370px]" />
          <img src={assets.Mask_group_3} alt="apprentissage 3" className="rounded-xl object-cover w-full h-[400px] md:h-[370px]" />
        </div>
      </Container>
    </div>
  );
};

export default Pedagogie;
