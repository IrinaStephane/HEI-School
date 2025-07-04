import { Facebook, Linkedin, Instagram } from "lucide-react";
import assets from "../image/assets";

export default function Footer() {
    return (
        <footer className="bg-primary text-white min-h-[318px] w-full">
            <div className="max-w-[1268px] mx-auto px-7 sm:px-10 pt-10 pb-10">
                {/* Logo HEI */}
                <div className="mb-10 flex justify-center md:justify-start">
                    <img src={assets.logo} alt="Logo" className="w-20" />
                </div>
                {/* Grid principal avec 4 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
                    {/* Colonne 1 - Formation */}
                    <div className="space-y-5 max-w-[260px] md:mx-auto">
                        <p className="text-white text-xl leading-relaxed">
                            Formation habilitée par l'État suivant le système LMD
                        </p>
                        <p className="text-white text-xl break-words">
                            Habilitation MESupRes n°31309/2023
                        </p>
                    </div>
                    {/* Colonne 2 - Adresse */}
                    <div className="md:mx-auto">
                        <h3 className="text-white text-xl font-semibold mb-5">Adresse</h3>
                        <div className="space-y-3 text-white text-lg">
                            <p>II J 161 R Ambodivoanjo</p>
                            <p>Ivandry Antananarivo</p>
                            <p>101, Madagascar</p>
                        </div>
                    </div>
                    {/* Colonne 3 - Navigation */}
                    <div className="max-w-[200px] md:mx-auto">
                        <h3 className="text-white text-xl font-semibold mb-5">
                            Navigation
                        </h3>
                        <div className="space-y-3">
                            <a href="#" className="text-secondary text-lg font-semibold transition-transform duration-200 hover:scale-105 block">
                                Accueil
                            </a>
                            <a href="#" className="text-white hover:text-secondary text-lg transition-transform duration-200 hover:scale-105 block">Actualités</a>
                            <a href="#" className="text-white hover:text-secondary text-lg transition-transform duration-200 hover:scale-105 block">Bourse d'études</a>
                            <a href="#" className="text-white hover:text-secondary text-lg transition-transform duration-200 hover:scale-105 block">Inscription</a>
                        </div>
                    </div>
                    {/* Colonne 4 - Médias sociaux */}
                    <div className="flex flex-col items-start max-w-[200px] md:mx-auto">
                        <h3 className="text-white text-lg font-semibold mb-5">
                            Médias sociaux
                        </h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                <Facebook className="w-6 h-6 text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                <Linkedin className="w-6 h-6 text-white" />
                            </a>
                            <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110">
                                <Instagram className="w-6 h-6 text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="w-full bg-[#f1f1f1] text-[#8c8c8c] text-center py-3 text-base font-semibold">
                © HEI Madagascar
            </div>
        </footer>
    );
}
