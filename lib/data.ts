import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import dapenImg from "@/public/dana_pensiun_1.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import legalImg from "@/public/legal_viewer.png";
import ohcleanerImg from "@/public/ohcleaner.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Majoring In IT - Trisakti University",
    location: "Grogol, West Jakarta",
    description:
      "Studying  Informatics Engineering at Trisakti University with a high GPA of 3,78.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "Curriculum Chair, Google Developer Student Club",
    location: "Grogol, West Jakarta",
    description:
      "As the Curriculum Chair at the Google Developer Student Club, Universitas Trisakti, I designed and organized educational content and workshops, coordinated with speakers, and planned events to meet our members' learning needs.",
    icon: React.createElement(FaReact),
    date: "Aug 2023 - Jul 2024",
  },
  {
    title: "Data/Software Engineer",
    location: "Central Jakarta, DKI Jakarta",
    description:
      "I interned as a Data/Software Engineer at Kementerian Keuangan Republik Indonesia through the MSIB Batch 6 program. I developed a legal viewer web application using NextJS, TailwindCSS, Prisma, and TypeScript for front-end and database management, with Python for data extraction and modeling.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb - Jun 2024",
  },
  {
    title: "Head of Research & Technology Department",
    location: "Grogol, West Jakarta",
    description:
      "Leading to work on programs in the Informatics Engineering Student Association board at Trisakti University, especially in research & Technology fields.",
    icon: React.createElement(FiUsers),
    date: "Jul 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Legal Viewer JDIH Kemenkeu",
    description:
    "A web application for helping legal drafter to create a Comparison Matrix",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Node.js","prisma"],
    imageUrl: legalImg,
    },
      {
        title: "Oh Cleaner!",
        description:
          "An user interfaces for mobile applications that can be used to order cleaning services",
        tags: ["Figma","Photoshop"],
        imageUrl: ohcleanerImg,
      },
  {
    title: "Pension Fund Web",
    description:
      "A web application designed for recording and managing pension fund transactions, specifically used by the employees of Universitas Trisakti.",
    tags: ["Python", "Django", "JavaScript", "Html", "Css"],
    imageUrl: dapenImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Open Search",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgreSQL",
  "Python",
  
] as const;
