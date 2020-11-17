import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Clarissa Jaime | Front-End Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Clarissa Jaime.',
  subtitle: "I'm a front-end engineer that builds great products.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'As a former digital marketer and UX engineer, I am passionate about building effective and optimal user experiences.',
  paragraphTwo:
    'In my current role at 2U, Inc, I work on the learning management management system and build tools to provide course data to faculty and students.',
  paragraphThree:
    "When I'm not working, you'll find me taking art classes, including singing, makeup artistry and generative art.",
  resume:
    'https://docs.google.com/document/d/108P-DCqisyr_6sgmpWUYAKvubz1_QFljjxAzDUQ20a4/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dashboard.jpg',
    title: 'Dotlearn',
    info:
      "Dotlearn is 2U's proprietary learning management system. On the Academic Product team, I worked on the dashboard and activity report pages to display course insights to faculty and students.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'atrio-ui.jpg',
    title: 'Atrio-UI',
    info:
      "Atrio UI is 2U's new React design system. I worked on the project ideation and developed components for the project.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'whitelabel.jpg',
    title: 'Whitelabel',
    info:
      "Whitelabel is 2U's internal asset management application. I was in charge of project documentation, stakeholder communication, and improving the project infrastructure.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'capex.jpg',
    title: 'Capy',
    info:
      'Capy, the CapEx Reporting Tool, is an internal finance application that streamlines the capex reporting process for employees. I was a part of the ideation and cross-team communication efforts.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'clarissanjaime@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/clarissajaime/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/clarissajaime/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
