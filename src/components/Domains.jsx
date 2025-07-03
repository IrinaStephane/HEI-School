import React from 'react';
import { Container } from './Container';
import { domains } from '../constants';

const Domains = () => {
    return (
        <div className="bg-[#F1F1F1] py-16">
            <Container>
                <h2 className="text-center text-4xl font-bold text-primary mb-4 font-['EB-Garamond']">
                    Domaines
                </h2>
                <p className="text-center text-primary mb-12">
                    Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {domains.map((domain, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow hover:shadow-lg transition-shadow duration-300 w-[360px] min-h-[525px]"
                        >
                            <img
                                src={domain.icon}
                                alt={domain.title}
                                className="w-40 h-40 object-contain mb-5"
                            />
                            <h3 className="text-2xl font-semibold text-secondary mb-4 font-['EB-Garamond']">
                                {domain.title}
                            </h3>
                            <p className="text-primary text-base ">
                                {domain.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Domains;
