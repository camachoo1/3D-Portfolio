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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    icon: starbucks,
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
    icon: tesla,
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
    icon: shopify,
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
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
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
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
