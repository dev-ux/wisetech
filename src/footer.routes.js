// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "WiseTech",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/pages/landing-pages/about-us" },
        { name: "freebies", href: "/pages/landing-pages/freebies" },
        { name: "premium tools", href: "/pages/landing-pages/premium-tools" },
        { name: "blog", href: "/pages/landing-pages/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "/pages/landing-pages/illustrations" },
        { name: "bits & snippets", href: "/pages/landing-pages/bits-snippets" },
        { name: "affiliate program", href: "/pages/landing-pages/affiliate-program" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/pages/landing-pages/contact-us" },
        { name: "knowledge center", href: "/pages/landing-pages/knowledge-center" },
        { name: "custom development", href: "/pages/landing-pages/custom-development" },
        { name: "sponsorships", href: "/pages/landing-pages/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/pages/landing-pages/terms-conditions" },
        { name: "privacy policy", href: "/pages/landing-pages/privacy-policy" },
        { name: "licenses (EULA)", href: "/pages/landing-pages/licenses-eula" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} WiseTech by{" "}
      <MKTypography
        component="a"
        href="/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        WiseTech
      </MKTypography>
      .
    </MKTypography>
  ),
};
