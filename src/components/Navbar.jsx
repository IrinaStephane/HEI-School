import React, { useState } from 'react';
import assets from '../image/assets';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Overlay semi-transparent when menu is open */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Mobile slide menu */}
            <div
                className={`fixed top-0 left-0 h-full w-[60%] bg-primary z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 flex flex-col items-center pt-10 gap-[43px]`}
            >
                <button
                    className="absolute top-7 right-7 text-white"
                    onClick={() => setMenuOpen(false)}
                >
                    <X size={32} />
                </button>
                <button className='text-lg uppercase text-secondary font-semibold hover:text-[#AC8417] duration-200 mt-20'>
                    Acceuil
                </button>
                <button className='text-lg uppercase text-white font-semibold hover:text-[#AC8417] duration-200'>
                    Actualités
                </button>
                <button className='text-lg uppercase text-white font-semibold hover:text-[#AC8417] duration-200'>
                    Bourse d’études
                </button>
                <button className='text-lg uppercase text-white font-semibold hover:text-[#AC8417] duration-200'>
                    Inscription
                </button>
            </div>

            <nav className='h-27 bg-primary px-6 md:px-15 flex items-center'>
                <div className="flex justify-between items-center relative z-30 w-full max-w-[80rem] mx-auto">
                    <img src={assets.logo} alt="Logo" className='w-24' />

                    <div className="flex items-center gap-4 md:hidden">
                        <button onClick={() => setMenuOpen(true)} className="text-white">
                            <Menu size={32} />
                        </button>
                        <button className='text-lg uppercase text-white bg-[#E3A03C] font-medium hover:text-primary duration-200 rounded-sm p-2'>
                            INTRANET
                        </button>
                    </div>

                    <div className="hidden md:flex gap-8">
                        <button className='text-lg uppercase text-[#E3A03C] font-semibold hover:text-[#AC8417] duration-200'>
                            Acceuil
                        </button>
                        <button className='text-lg uppercase text-white font-semibold hover:text-[#AC8417] duration-200'>
                            Actualités
                        </button>
                        <button className='text-lg uppercase text-white font-semibold hover:text-[#AC8417] duration-200'>
                            Bourse d’études
                        </button>
                        <button className='text-lg uppercase text-white font-semibold hover:text-[#AC8417] duration-200'>
                            Inscription
                        </button>
                        <button className='text-lg uppercase text-white bg-[#E3A03C] font-medium hover:text-primary duration-200 rounded-sm p-2'>
                            INTRANET
                        </button>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default Navbar;