import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
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
      name: "Three JS",
      icon: threejs,
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
      title: "Amar Jyoti Boarding School",
      company_name: "SEE",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Data: 2021 A.D",
      points: [
        "Completed Secondary Education Examination (SEE)",
        "Participated actively in extracurricular activities",
        "devloped many soft skills like leadership and organizational skills",
      ],
    },
    {
      title: "Tillotama Campus",
      company_name: "+2",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2021 - 2023 A.D",
      points: [
        "Completed Higher Secondary Education in Science Stream (PCBM)",
      ],
    },
    {
      title: "Presidential Graduate School",
      company_name: "Bachelor",
      icon: shopify,
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Currently pursuing Bachelor's in Information Technology (BScIT)",
        "Learning and implementing various programming languages and technologies",
        "Learning Javascript and its liberaries like React, Vue, Node and Three.js",
        "Maintaining a good academic performance while developing practical skills"
      ],
    },
    {
      title: "Web Devloper",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Present",
      points: [
        "Developing full-stack websites using MERN (MongoDB, Express.js, React, Node.js) stack",
        "Successfully developed and delivered a repair service website for Amass Computer Shop Nepal, featuring a comprehensive client-owner interaction system with WhatsApp integration. Implemented and customized the design according to specific client requirements.",
        "Managing database operations using MongoDB for efficient data handling",
        "Successfully built and deployed a full-stack clothing e-commerce website",
        "Created a perfume e-commerce platform with complete client and server functionality",
        "Implementing real-time features and database operations using MongoDB",
        "Continuously learning and applying new technologies in real-world projects",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };