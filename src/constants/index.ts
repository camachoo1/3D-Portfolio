import {
  backend,
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
  aerotek,
  astranis,
  discable,
  orcastra,
  riemannsum,
  threejs,
  personal,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  
  {
    title: 'Fullstack Developer',
    icon: backend,
  },
  
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Working on personal projects',
    icon: personal,
    iconBg: '#383E56',
    date: 'March 2023 - Current',
    points: [
      'Proficient in developing modern and responsive user interfaces using React and TypeScript, leveraging reusable components, hooks, and state management.',
      'Experienced in building RESTful APIs with Express and utilizing MongoDB for efficient data storage and retrieval in personal projects.',
      'Strong understanding of TypeScript for type-safe development, ensuring code reliability and easier maintenance.',
      'Capable of working independently, handling project architecture, implementation, and deployment, while continuously learning and staying up-to-date with the latest trends and best practices in the JavaScript ecosystem.'
    ],
  },
  {
    title: 'Technical Recruiter',
    company_name: 'Astranis',
    icon: astranis,
    iconBg: '#E6DEDD',
    date: 'May 2021 - Oct 2022',
    points: [
      'Owned and led full cycle recruitment for the Environmental Test, Assembly Integration, and Test, and Production teams.',
      'Developed streamlined recruiting processes such as approved scoring criteria for interviews, requirements for key roles, and facilitating meetings to discuss post onsite interviews which resulted in 75% success ratio across interview stages.',
      'Facilitated weekly meetings with team leads and executive team to discuss weekly priorities and progress across each key role and forecasting.',
      'Identified key job requirements, screen/interview candidates to understand strengths, and aim to match skills, passion, and career interests with specific organizational needs.'
    ],
  },
  {
    title: 'Recruiter/Account Manager',
    company_name: 'Aerotek',
    icon: aerotek,
    iconBg: '#383E56',
    date: 'Dec 2017 - Apr 2021',
    points: [
      'Increased sales territories for both manufacturing and corporate services industries by 120% over 3 year period.',
      'Conducted meetings with hiring managers to negotiate rates, contracts, salaries, and fully qualify each requisition based on clients needs.',
      'Managed team of 4  recruiters and aided in professional development and training by providing detailed daily, weekly, and quarterly expectations.'
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Disclone',
    description:
      'Full stack web application based off Discord. This was built using React, Redux, Ruby on Rails, and CSS3.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rubyonrails',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
    ],
    image: discable,
    source_code_link: 'https://github.com/camachoo1/Discable',
  },
  {
    name: 'Orcastra',
    description:
      'A MERN stack project created to help new inventors post their ideas on a platform that allows others to provide feedback and potentially invest in their future',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
    ],
    image: orcastra,
    source_code_link: 'https://github.com/camachoo1/Orcastra',
  },
  {
    name: 'Riemann Sum',
    description:
      'A data visualization project built primarily with vanilla JavaScript and DesmosAPI that allows users to input their own functions and visualize how to compute the area under a graph using the Riemann Sum.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'desmosapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: riemannsum,
    source_code_link: 'https://github.com/camachoo1/Riemann-Sum',
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
