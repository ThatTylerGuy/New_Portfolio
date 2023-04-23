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
    CurtisGolfing,
    PioneerTown,
    TCR,
    CPR,
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
    {
      title: "Content Creator",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "IT Contractor",
      company_name: "Surface Creek Valley Historical Society",
      icon: PioneerTown,
      iconBg: "#383E56",
      date: "Jan 2023 - Current",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams to design and implement an interactive display board.",
        "Implementing responsive design and ensuring clear user interactions.",
        "Participated in product testing and feedback collection for the project."
      ],
    },
    {
      title: "IT System Administrator",
      company_name: "Technical College of the Rockies",
      icon: TCR,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Current",
      points: [
        "Utilized Python to develop automated transaction reporting for the business office.",
        "Collaborating with cross-functional teams to deliver a high value product that increased efficency.",
        "Facilitated the incorporation of various software tools to benefit the productivity of instructors.",
        "Maintained Windows server infrastructure.",
        "Provided cybersecurity awareness training to all campus employees."
      ],
    },
    {
      title: "Device Repair Technician",
      company_name: "CPR Cell Phone Repair",
      icon: CPR,
      iconBg: "#383E56",
      date: "Oct 2020 - Oct 2022",
      points: [
        "Developed an automated signage system utilizing bash.",
        "Repaired customer damaged devices.",
        "Provided software technical support for customers when needed."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Golf With Curtis",
      description:
        "A website dedicated to a professional golfer and his side buisness of teaching newcomers to the game.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        }
      ],
      image: CurtisGolfing,
      source_code_link: "https://github.com/ThatTylerGuy/CurtisCoaching",
    },
  ];
  
  export { services, technologies, experiences, projects };