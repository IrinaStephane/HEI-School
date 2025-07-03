import assets from "../image/assets"
import { Container } from "./Container"

export const Debouche = () => {
return (
   <Container className={`py-6`}>
        <div className="flex flex-row gap-[40px] items-center">
            <div className="flex flex-col gap-5 flex-1">
                <h2 className="text-5xl font-['EB-Garamond'] font-bold text-primary ">Quelques débouchés</h2>
                <p className="text-primary text-xl">
                    Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
                </p>
                <p className="text-primary text-xl">
                    Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
                </p>
            </div>
            <div className="w-[45%] hidden md:block">
                <img
                    src={assets.debouche}
                    alt="Métiers du numérique"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
        </div>
   </Container> 
)
}
