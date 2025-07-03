import React from 'react'
import { Container } from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { teamMembers } from '../constants';

export const Team = () => {
    return (
        <div className=' bg-[#6586C7]'>
            <Container className={'flex flex-col justify-center py-20'}>
                <h2 className="font-['EB-Garamond'] text-4xl font-bold text-center text-white mb-4">L'équipe pédagogique</h2>
                <p className="text-white text-center max-w-263 mx-auto">Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.</p>

            </Container>
            <div className="w-full pb-16">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    style={{
                        "--swiper-pagination-color": "#fff",
                        "--swiper-pagination-bullet-inactive-color": "#000",
                        "--swiper-pagination-bullet-inactive-opacity": "0.2",
                        "--swiper-pagination-bullet-width": "14px",
                        "--swiper-pagination-bullet-height": "14px",
                        "--swiper-pagination-bullet-horizontal-gap": "8px"
                    }}
                    className="w-full max-w-7xl mx-auto"
                >
                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index} className='pb-17'>
                            <div className="bg-white rounded-3xl flex flex-col items-center justify-center text-center shadow-lg mb-10 md:w-78 w-76 h-97 m-auto">
                                <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md mb-4" />
                                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{member.name}</h3>
                                <p className="text-sm md:text-base text-gray-700 max-w-[80%]">{member.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div
                        className="swiper-button-prev transform -translate-x-9"
                        style={{ color: '#fff', fontWeight: 'bold', width: '80px', height: '80px', left: '10px', top: 'calc(50% - 40px)' }}
                    ></div>
                    <div
                        className="swiper-button-next transform translate-x-9"
                        style={{ color: '#fff', fontWeight: 'bold', width: '80px', height: '80px', right: '10px', top: 'calc(50% - 40px)' }}
                    ></div>
                </Swiper>
            </div>
        </div>
    )
}
