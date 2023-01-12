import { ReactNode } from "react";
import { FaMagic } from "react-icons/fa";

export const firstIntroHeadings = [
  "ReactJs Developer",
  "Graphic Designer",
  "Web Developer",
  "Web App Developer",
  "Full Stack Developer",
];

export const items = [
  { label: "Home", link: "#" },
  { label: "About", link: "#about" },
  { label: "Contact", link: "#contact" },
  { label: "Projects", link: "#projects" },
  { label: "Education", link: "#education" },
  { label: "Interest", link: "#interest" },
  // { label: "Certificates", link: "#certificates" },
];

export const educationItems = [
  {
    eType: "Bachelor Of Technology In Computer Engineering With AI-ML",
    eName: "Silver Oak University, Gota, Ahmedabad",
    eYear: "2020-2024",
    eResult: "CPI: 9.1 (In 5th Semester)",
  },
  {
    eType: "12th(HSC) - PCM",
    eName: "Gyanda Girls High School, Ghatlodiya, Ahmedabad",
    eYear: "2019-2020",
    eResult: "Percentile Rank: 88.39",
  },
  {
    eType: "12th(SSC)",
    eName: "Gyanda Girls High School, Ghatlodiya, Ahmedabad",
    eYear: "2017-2018",
    eResult: "Percentile Rank: 98.37",
  },
];

export const skillSet = [
  {
    label: "JavaScript",
    level: "90",
  },
  {
    label: "TypeScript",
    level: "80",
  },
  {
    label: "Python",
    level: "85",
  },
  {
    label: "HTML",
    level: "95",
  },
  {
    label: "CSS",
    level: "90",
  },
  {
    label: "ReactJS",
    level: "90",
  },
  {
    label: "Redux",
    level: "85",
  },
  {
    label: "NextJS",
    level: "95",
  },
  {
    label: "Flask",
    level: "95",
  },
  {
    label: "MySQL",
    level: "90",
  },
];

export const projectItems = [
  {
    title: "JSON To UI Converter",
    technology: "Skills: ReactJS, HTML, CSS, Typescript",
    description:
      "This web app convert JSON data into visible UI parts.\n\nIt takes specific JSON data that helps to build the UI.",
    liveLink: "https://json-to-ui-converter.vercel.app/",
  },
  {
    title: "Expense Management System",
    technology: "Skills: VueJs, HTML, CSS, Axios",
    description:
      "This project was created at a hackathon. In this project, I create the frontend part of the web app in VueJS and I handle the API integration part.\n\nThis is used to track users finances efficiently and remind them of their budget on a daily basis.",
    liveLink: "https://github.com/PatelPreyansh30/expense-management-system",
  },
  {
    title: "Cybersec Club Website",
    technology: "Skills: ReactJs, HTML, CSS",
    description:
      "This website was created for the silver oak cybersec club organized by IEEE silver oak group.",
    liveLink: "https://ieee-sou-cybersec-event.web.app/",
  },
  {
    title: "IEEE SOU Website Updation",
    technology: "Skills: Debugging, VueJs, HTML, CSS, Firebase",
    description:
      "This website was created by our seniors and now we are tasked with updating this website and fixing bugs.",
    liveLink: "https://ieee-sou-cybersec-event.web.app/",
  },
];
