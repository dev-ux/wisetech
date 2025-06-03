// @mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
const logoCT = "/images/logo.webp";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "WiseTech-Eng",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/wisetech-eng",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/WiseTechEng",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/c/WiseTechEngineering",
    },
  ],
  contact: [
    {
      icon: <LocationOnIcon fontSize="small" />,
      text: " 56 Bis Rue Ferdinand Buisson, 91210 Draveil, FRANCE",
    },
    {
      icon: <PhoneIcon fontSize="small" />,
      text: "+33 1 23 45 67 89",
    },
    {
      icon: <ContactMailIcon fontSize="small" />,
      text: "contact@wisetech-eng.com",
    },
  ],
  menus: [
    {
      name: "Expertises",
      items: [
        { name: "Ingénierie Structurelle", href: "/pages/Structural" },
        { name: "BIM Management", href: "/services/bim" },
        { name: "Diagnostics Techniques", href: "/services/diagnostics" },
        { name: "VRD & Infrastructures", href: "/services/vrd" },
      ],
    },
    {
      name: "Projets",
      items: [
        { name: "Réalisations", href: "/projects" },
        { name: "Études de cas", href: "/case-studies" },
        { name: "Témoignages", href: "/testimonials" },
        { name: "Galerie", href: "/gallery" },
      ],
    },
    {
      name: "Ressources",
      items: [
        { name: "Blog Technique", href: "/blog" },
        { name: "Guides PDF", href: "/resources/guides" },
        { name: "FAQ", href: "/faq" },
        { name: "Normes en vigueur", href: "/standards" },
      ],
    },
    {
      name: "Entreprise",
      items: [
        { name: "Notre équipe", href: "/about/team" },
        { name: "Carrières", href: "/careers" },
        { name: "Partenariats", href: "/partnerships" },
        { name: "Événements", href: "/events" },
      ],
    },
  ],
  legal: [
    { name: "Mentions légales", href: "/legal/mentions-legales" },
    { name: "RGPD", href: "/legal/rgpd" },
    { name: "Conditions générales", href: "/legal/cgu" },
    { name: "Plan du site", href: "/sitemap" },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      © {date} WiseTech-Eng - Tous droits réservés | SIRET: 123 456 789 00045 | Ordre des Ingénieurs: O12345
    </MKTypography>
  ),
};



