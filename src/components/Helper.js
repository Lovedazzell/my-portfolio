import {
  snapChat,
  mail,
  instagram,
  linkdIn,
  Ig,
  Phone,
  Vs,
  Circle,
  Figma,
  IgBg,
  VsBg,
  phoneBg,
  github,
  circleBg,
  figmaBg,
} from "../assets/images/Index.js";

export const navLink = [
  {
    name: "ABOUT",
    href: "about",
  },
  {
    name: "SKILL",
    href: "skill",
  },
  {
    name: "PROJECT",
    href: "project",
  },
  {
    name: "CONTACT",
    href: "contact",
  },
  {
    name: "SERVICES",
    href: "service",
  },
];

export const socialLink = [
  {
    img: github,
    link: "https://github.com/Lovedazzell",
  },
  {
    img: linkdIn,
    link: "https://www.linkedin.com/in/lovedazzell?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    img: mail,
    link: "mailto:lovepreetdazzell@gmail.com",
  },
  {
    img: instagram,
    link: "https://www.instagram.com/lovedazzell?igsh=YWJ6c3dhOTJnODd0",
  },
];

export const services = [
  {
    icon: Figma,
    heading: "UI/UX Designer",
    desc: "Crafting intuitive, visually compelling experiences. A blend of UX strategy and UI aesthetics, creating seamless, user-centric designs that elevate digital interactions.",
    bgImage: figmaBg,
  },
  {
    icon: Circle,
    heading: "Graphic Designer",
    desc: "Transforming concepts into captivating visuals. A fusion of creativity and technique, delivering impactful designs that resonate and inspire.",
    bgImage: circleBg,
  },
  {
    icon: Vs,
    heading: "Web Development",
    desc: "Building responsive, dynamic websites. Expertise in front-end and back-end technologies, crafting functional, user-friendly digital solutions with clean code and engaging interfaces.",
    bgImage: VsBg,
  },
  {
    icon: Ig,
    heading: "Social Media Post Designing",
    desc: "Designing captivating social media visuals that engage and enhance brand communication across diverse platforms.",
    bgImage: IgBg,
  },
  {
    icon: Phone,
    heading: "Mobile Apps",
    desc: "Creating seamless mobile experiences. Proficient in iOS and Android development, crafting user-centric apps with intuitive functionality and captivating interfaces.",
    bgImage: phoneBg,
  },
];
