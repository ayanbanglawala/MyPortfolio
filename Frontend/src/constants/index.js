import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";
import cienciaslogo from "../assets/cienciaslogo.png"
import snm from "../assets/cropped-SNM-.webp"
import ww from "../assets/wristwonders.png"
import MyChat from "../assets/mychatpng.png"
import news from "../assets/news.png"


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Ciencias in VR",
    icon: cienciaslogo,
    iconBg: "#383E56",
    date: "July 2023 - December 2024",
    points: [
      "Developed and enhanced a live website by implementing new features and designing a modern dashboard to improve usability and functionality.",
      "Worked extensively with PHP during the initial phase, gaining proficiency in backend development and website maintenance.",
      "Explored and lrarned Unity 3D and Virtual Reality (VR) development, transitioning into innovative VR projects.",
      "Contributed to the design and implementation of VR environments, creating immersive and interactive experiences using Unity.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "SNM Techcraft Innovation",
    icon: snm,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Building and maintaining scalable and efficient web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      "Collaborating with designers and product teams to develop user-friendly and visually appealing interfaces.",
      "Developing robust backend APIs and ensuring seamless integration with frontend components.",
      "Implementing responsive design principles to deliver cross-browser and mobile-friendly solutions.",
      "Debugging and optimizing applications to improve performance and user experience.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wrist Wonders",
    description:
      "Web-based platform enabling users to browse, purchase, and manage wristwatches, offering a seamless and efficient shopping experience",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      
    image: ww,
    source_code_link: "https://github.com/ayanbanglawala/WristWonders",
    link: "https://wristwonders-ewmk.onrender.com",
  },
  {
    name: "My Chat",
    description:
      "MyChat App is a real-time chat platform that enables seamless communication with an intuitive, responsive interface for users to connect easily.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Socket.IO",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      
    image: MyChat,
    source_code_link: "https://github.com/ayanbanglawala/MyChat",
    link:"https://mychat-76e8.onrender.com"
  },
  {
    name: "Express News",
    description:
      "News Dashboard is a web application that displays real-time news from various sources, allowing users to filter and search articles based on categories and keywords.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: news, // Add your image reference here
    source_code_link: "https://github.com/ayanbanglawala/expressnews",
  }
  
];

export { services, technologies, experiences, testimonials, projects };
