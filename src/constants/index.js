// src/constants/index.js

import assets from '../image/assets';

const slides = [
    {
        image: assets.hei_banner_1,
        text: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants."
    },
    {
        image: assets.hei_banner_2,
        text: "« L’éducation est l’arme la plus puissante pour changer le monde » selon Nelson Mandela. « L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » selon HEI. C’est notre mission."
    },
    {
        image: assets.hei_banner_3,
        text: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants."
    },
];

const teamMembers = [
    {
        image: assets.Mirado,
        name: "Mirado RAFENOMAHENINTSOA",
        title: "Data and Business Intelligence Specialist 5+",
    },
    {
        image: assets.Julien,
        name: "Julien RAJERISON",
        title: "Lead Développeur | Fondateur de l’association Techzara Madagascar",
    },
    {
        image: assets.Ryan,
        name: "Ryan ANDRIAMAHERY",
        title: "Développeur back end | Cofondateur et Directeur des opérations de HEI",
    },
    {
        image: assets.Jean_Aimé,
        name: "Jean Aimé Maxa",
        title: "Responsable technique cybersécurité chez CES France Continental (Toulouse – France)",
    },
    {
        image: assets.Parison,
        name: "Parison Ravalomanda",
        title: "Ingénieur en informatique |  Ingénieur logiciel chez Google (Londres – UK)",
    },
    {
        image: assets.Yannick,
        name: "Yannick Raharijaona",
        title: "Responsable technique ML chez Rocket Science (Ottawa – Canada)",
    },
    {
        image: assets.Tahina,
        name: "Dre Tahina Ralitera",
        title: "Docteure-Ingénieure, CNRS France | Prix L’Oréal-UNESCO pour les Femmes en Science (2017)",
    },
    {
        image: assets.Lou,
        name: "Dr Lou Maurica",
        title: "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI",
    },
];

const domains = [
    {
        icon: assets.Cloud_et_cybersecurite,
        title: 'Cloud et cybersécurité',
        description: `Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.`,
    },
    {
        icon: assets.Intelligence_artificielle,
        title: 'Intelligence artificielle',
        description: `Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.`,
    },
    {
        icon: assets.Ingenierie_logicielle,
        title: 'Ingénierie logicielle',
        description: `Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.`,
    },
];

const logos = [
    { src: assets.Java, alt: "Java" },
    { src: assets.python, alt: "Python" },
    { src: assets.JS, alt: "JavaScript" },
    { src: assets.C, alt: "C" },
    { src: assets.TS, alt: "TypeScript" },
    { src: assets.docker, alt: "Docker" },
    { src: assets.next, alt: "Next.js" },
    { src: assets.aws, alt: "AWS" },
    { src: assets.serverless, alt: "Serverless" },
    { src: assets.react, alt: "React" },
    { src: assets.openapi, alt: "OpenAPI" },
];

const partners = [
  { src: assets.LOGO_NEXTA, alt: "NextA" },
  { src: assets.PN_Logo_baseline_color_ENG, alt: "Passerelles numériques" },
  { src: assets.Yooz, alt: "Yooz" },
  { src: assets.logo_etech, alt: "Etech" },
  { src: assets.logo_emit, alt: "EMIT" },
  { src: assets.Logo_Numer_vf, alt: "Numer" },
  { src: assets.bp_logo, alt: "D Partners" },
  { src: assets.YIF_LOGO, alt: "Youritfactorv" },
  { src: assets.logo_kante_company_1, alt: "Kanteco" },
];


export { slides, teamMembers, domains, logos, partners };