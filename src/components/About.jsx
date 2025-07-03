import React from "react";
import { GraduationCap, Users, Medal } from "lucide-react";
import assets from "../image/assets";
import { Container } from "./Container";

const About = () => {
  return (
    <Container className="py-16">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="hidden lg:block">
          <img
            src={assets.A_propos_left_1}
            alt="A propos left 1"
            className="w-[33rem] rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 max-w-xl items-center lg:items-start">
          <h2 className="text-3xl md:text-4xl font-bold font-['EB-Garamond'] text-primary mb-4 text-center lg:text-left">À propos de nous</h2>
          <div className="flex flex-col gap-4y w-full">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <GraduationCap className="text-secondary w-15 h-15" />
              <h3 className="text-xl font-semibold text-primary">+3 ans</h3>
            </div>
            <p className="text-gray-700 mb-5 text-center lg:text-left">
              Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l'informatique. Nous sommes un groupe d'experts, de professionnels et de passionnés de l'informatique de Madagascar et du monde entier.
            </p>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Users className="text-secondary w-15 h-15" />
              <h3 className="text-xl font-semibold text-primary">+250 étudiants</h3>
            </div>
            <p className="text-gray-700 mb-5 text-center lg:text-left">
              Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre formation habilitée par l'État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la "grande famille HEI".
            </p>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Medal className="text-secondary w-15 h-15" />
              <h3 className="text-xl font-semibold text-primary">Notre mission</h3>
            </div>
            <p className="text-gray-700 mb-5 text-center lg:text-left">
              Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
