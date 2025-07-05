import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";

export const Admission = () => {
  return (
    <div className="bg-[#7893ce] min-h-screen flex flex-col justify-center py-16">
      <Container>
        <h2 className="text-white text-5xl font-serif font-bold text-center mb-8 title">
          Admission
        </h2>
        <p className="text-white text-center text-lg mb-2 font-[Helvetica]">
          Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait
          par test de niveau :
        </p>
        <p className="text-white text-center text-lg mb-12 font-[Helvetica]">
          une épreuve de français niveau B2 et d’une épreuve de mathématiques
          niveau Terminale D.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 md:gap-0 w-full mb-12">
          {/* Bloc 1 */}
          <div className="flex-1 bg-[#FCDFB5] px-8 py-10 flex flex-col min-h-55 max-w-full md:max-w-none">
            <span className="text-[3rem] font-bold text-white leading-none mb-4 font-[Helvetica]">
              01
            </span>
            <span className="block font-bold text-lg text-black mb-4 font-[Helvetica]">
              Dépôt de dossiers :
            </span>
            <span className="text-black text-base font-normal font-[Helvetica]">
              pour les bacheliers de toutes séries sans limite d’âge
            </span>
          </div>
          {/* Arrow 1 */}
          <div className="hidden md:flex items-center justify-center bg-[#FCDFB5] px-0">
            <ArrowRight size={48} className="text-white" />
          </div>
          {/* Bloc 2 */}
          <div className="flex-1 bg-[#F7D090] px-8 py-10 flex flex-col min-h-55 max-w-full md:max-w-none">
            <span className="text-[3rem] font-bold text-white leading-none mb-4 font-[Helvetica]">
              02
            </span>
            <span className="block font-bold text-lg text-black mb-4 font-[Helvetica]">
              Test de niveau :
            </span>
            <span className="text-black text-base font-normal font-[Helvetica]">
              composé d’une épreuve de français niveau B2 et d’une épreuve de
              mathématiques niveau Terminale D
            </span>
          </div>
          {/* Arrow 2 */}
          <div className="hidden md:flex items-center justify-center bg-[#F7D090] px-0">
            <ArrowRight size={48} className="text-white" />
          </div>
          {/* Bloc 3 */}
          <div className="flex-1 bg-[#F1C16B] px-8 py-10 flex flex-col min-h-55 max-w-full md:max-w-none">
            <span className="text-[3rem] font-bold text-white leading-none mb-4 font-[Helvetica]">
              03
            </span>
            <span className="block font-bold text-lg text-black mb-1 font-[Helvetica]">
              Inscription définitive{" "}
              <span className="font-normal font-[Helvetica]">(si test réussi)</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full mt-4">
          <button className="w-full md:w-auto px-10 py-3 border-2 border-white text-white text-lg font-semibold rounded bg-transparent hover:bg-white hover:text-[#7893CE] transition font-[Helvetica]">
            Inscrivez-vous ici
          </button>
          <button className="w-full md:w-auto px-10 py-3 bg-primary text-white text-lg font-semibold rounded hover:bg-[#133A7C] transition font-[Helvetica]">
            Résultat concours
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Admission;
