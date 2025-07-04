import { Facebook, Linkedin, Instagram } from "lucide-react";
import assets from "../image/assets";

export default function Footer() {
    return (
        <footer className="bg-[#031b48] text-white min-h-[318px] w-full">
            <div className="max-w-[1268px] mx-auto px-10 pt-10 pb-10">
                {/* Logo HEI */}
                <div className="mb-10">
                    <img src={assets.logo} alt="Logo" className="w-20" />
                </div>
                {/* Grid principal avec 4 colonnes */}
                <div className="grid grid-cols-4 gap-12 mb-8">
                    {/* Colonne 1 - Formation */}
                    <div className="space-y-5 max-w-[260px] mx-auto">
                        <p className="text-white text-base leading-relaxed break-words">
                            Formation habilitée par l'État suivant le système LMD
                        </p>
                        <p className="text-white text-base break-words">
                            Habilitation MESupRes n°31309/2023
                        </p>
                    </div>
                    {/* Colonne 2 - Adresse */}
                    <div className="max-w-[200px] mx-auto">
                        <h3 className="text-white text-lg font-semibold mb-5">Adresse</h3>
                        <div className="space-y-3 text-white text-base">
                            <p>II J 161 R Ambodivoanjo</p>
                            <p>Ivandry Antananarivo</p>
                            <p>101, Madagascar</p>
                        </div>
                    </div>
                    {/* Colonne 3 - Navigation */}
                    <div className="max-w-[200px] mx-auto">
                        <h3 className="text-white text-lg font-semibold mb-5">
                            Navigation
                        </h3>
                        <div className="space-y-3">
                            <div className="text-[#e6b43a] text-base font-semibold">
                                Accueil
                            </div>
                            <div className="text-white text-base">Actualités</div>
                            <div className="text-white text-base">Bourse d'études</div>
                            <div className="text-white text-base">Inscription</div>
                        </div>
                    </div>
                    {/* Colonne 4 - Médias sociaux */}
                    <div className="flex flex-col items-center max-w-[200px]">
                        <h3 className="text-white text-lg font-semibold mb-5">
                            Médias sociaux
                        </h3>
                        <div className="flex space-x-4">
                            <div className="w-12 h-12 bg-[#e6b43a] rounded-full flex items-center justify-center">
                                <Facebook className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-[#e6b43a] rounded-full flex items-center justify-center">
                                <Linkedin className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-12 h-12 bg-[#e6b43a] rounded-full flex items-center justify-center">
                                <Instagram className="w-6 h-6 text-white" />
                            </div>
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
