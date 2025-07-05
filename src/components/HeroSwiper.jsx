import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { slides } from '../constants';

const HeroSwiper = () => {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                style={{
                    "--swiper-pagination-color": "#000000",
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                    "--swiper-pagination-bullet-inactive-opacity": "0.9",
                    "--swiper-pagination-bullet-width": "14px",
                    "--swiper-pagination-bullet-height": "14px",
                    "--swiper-pagination-bullet-horizontal-gap": "8px",
                }}
                className="w-full h-screen"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-black/30 z-10"></div>
                            <img src={slide.image} alt={`slide-${index}`} className="w-full object-cover h-screen md:h-auto" />
                            <div className="absolute gap-22 inset-0 flex flex-col justify-center items-center text-center px-4 z-20 flex-grow">
                                <h2
                                    className="text-4xl md:text-7xl title font-bold text-white mt-40"
                                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
                                >
                                    Haute École d'Informatique
                                </h2>
                                <p className="text-white text-base md:text-xl max-w-4xl text-shadow-lg font-[Helvetica]">
                                    {slide.text}
                                </p>
                                <div className="flex flex-col md:flex-row justify-center md:w-full gap-5 md:gap-7 mt-7">
                                    <button className="bg-white text-primary font-[Helvetica] p-4 md:p-5 rounded-lg font-semibold hover:text-white hover:bg-primary transition-colors">
                                        Inscrivez-vous ici
                                    </button>
                                    <button className="bg-secondary text-white font-[Helvetica] p-4 md:p-5 rounded-lg font-semibold hover:text-secondary hover:bg-white transition-colors">
                                        Emploi du temps
                                    </button>
                                    <button className="bg-primary text-white font-[Helvetica] p-4 md:p-5 rounded-lg font-semibold hover:text-primary hover:bg-white transition-colors">
                                        Programme pédagogique ici
                                    </button>
                                </div>
                                <p className="text-white font-medium md:text-xl mt-7 font-[Helvetica]">
                                    Habilitation MESupRES, suivant l'arrêté n°31309/2023
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div
                    className="swiper-button-prev hover:bg-white -translate-y-1/2 z-30 p-2 md:p-3 rounded-full transition duration-200 hover:scale-110"
                    style={{ color: '#fff', fontWeight: 'bold', width: '80px', height: '80px' }}
                ></div>
                <div
                    className="swiper-button-next hover:bg-white -translate-y-1/2 z-30 p-2 md:p-3 rounded-full transition duration-200 hover:scale-110"
                    style={{ color: '#fff', fontWeight: 'bold', width: '80px', height: '80px' }}
                ></div>
            </Swiper>
            <style>{`.swiper-button-prev:hover, .swiper-button-next:hover { color: #001948 !important; }`}</style>
        </div>
    );
};

export default HeroSwiper;
