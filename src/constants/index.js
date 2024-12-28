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
  import  amassowner  from "../assets/amassowner.jpg";
  
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
        "I needed a website for my computer repair center to communicate with clients about laptop and computer repairs. He made me believe he could handle it, and he did! I thought it would be difficult for him, but he delivered the website quickly and exactly as I needed.",
      name: "Deepak Paudel",
      designation: "Owner",
      company: "Amass Computers",
      image: amassowner, // Use the imported image variable here
    },
 
  
  ];
  
  const projects = [
    {
      name: "Fullstack Clothing Ecommerce Website",
      description:
        "A full-stack clothing e-commerce website built using MERN (MongoDB, Express.js, React, Node.js) stack. The website features a comprehensive client-owner interaction system with WhatsApp integration. The design was customized according to specific client requirements.",
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
      source_code_link: "https://github.com/Aryan-986/Nep-Origins-Ecommerce",
    },
    {
      name: "Computer Servicing Website",
      description:
        "A computer servicing website built using React and REST API for efficient service management and scheduling where owner and user can interact with whatsapp integartion.",
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
      source_code_link: "https://github.com/Aryan-986/ComputerServiceNepal",
    },
    {
      name: "Seraphic Perfuem Ecommerce Website",
      description:
        "A luxurious perfume e-commerce website built using Next.js and Supabase. The website features a seamless user experience with a focus on product visualization and easy checkout process.",
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