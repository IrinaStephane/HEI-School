import React from "react";
import { Container } from "./Container";
import { logos } from "../constants";

const Langage = () => {
const firstRow = logos.slice(0, 5);
const secondRow = logos.slice(5, 11);

return (
    <div className="bg-[#F1F1F1] w-full py-16">
        <Container>
            <h2 className="text-primary text-4xl title font-bold text-center mb-4">
                Les technos et langages utilisées
            </h2>
            <p className="text-primary text-center text-base md:text-lg max-w-5xl mx-auto mb-10 font-[Helvetica]">
                Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
            </p>
            <div className="flex flex-col gap-8 items-center w-full max-w-5xl mx-auto">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-4 w-full justify-items-center">
                    {firstRow.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-auto md:h-20 md:w-auto w-16"
                        />
                    ))}
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-4 w-full justify-items-center">
                    {secondRow.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-auto md:h-14 md:w-auto w-20"
                        />
                    ))}
                </div>
            </div>
        </Container>
    </div>
);
};

export default Langage;
