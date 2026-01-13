import { FaCode, FaDesktop, FaReact, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profileImage.jpg'
import { FaProjectDiagram } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'


export const assets = {
    profileImg,
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
  {
    icon: FaReact,
    title: "Frontend Development",
    technologies: [
      "HTML5 & Semantic Markup",
      "CSS3, Flexbox & Grid",
      "JavaScript (ES6+)",
      "React.js, Hooks",
      "Context API",
      "Tailwind CSS",
      "Responsive Design",
      "Basic Accessibility (a11y)",
    ],
  },
  {
    icon: FaCode,
    title: "JavaScript & UI Logic",
    technologies: [
      "JavaScript Fundamentals",
      "DOM Manipulation",
      "Event Handling",
      "Async JavaScript (Promises)",
      "async / await",
      "Basic Data Structures",
      "Reusable UI Components",
    ],
  },
  {
    icon: FaDesktop,
    title: "Web & Development Tools",
    technologies: [
      "HTTP & HTTPS Basics",
      "REST API Integration",
      "Browser Rendering",
      "Git & GitHub",
      "NPM & Project Setup",
      "Basic Performance Optimization",
    ],
  },
];



export const projectData = [
    {
        title: 'SmartWorkflow',
        description: 'A React-based Employee Task Management System showcasing authentication, role-based dashboards, task management, and state persistence using Context API and LocalStorage.',
        image: `${project1}`,
        tech: ['React', 'Tailwind', 'Context Api', 'Local Storage'],
        demo: 'https://smartworkflow-app.netlify.app/',
        repo: 'https://github.com/ayushsrivastav1/Smart-Workflow'
    },
    {
        title: 'RECIPE APP',
        description: 'A Recipe App that allows users to search and explore recipes from a public API, displaying ingredients, cooking instructions, and images with a clean and user-friendly interface.',
        image: `${project2}`,
        tech: ['HTML', 'CSS', 'Javascript', 'Fetch Api'],
        demo: 'https://recipe-guideapp.netlify.app/',
        repo: 'https://github.com/ayushsrivastav1/Recipe-App'
    },
    {
        title: 'MOVIE GUIDE',
        description: 'A responsive movie search web app built with HTML, CSS, and JavaScript that fetches data from a public API to display movie details like title, rating, genre, release date, runtime, and plot in a clean interface.',
        image: `${project3}`,
        tech: ['HTML', 'CSS', 'Javascript', 'Fetch Api'],
        demo: 'https://responsive-movie-guideapp.netlify.app/',
        repo: 'https://github.com/ayushsrivastav1/Responsive-Movie-App'
    }
]

export const profileData = [
    {
        icon: FaCode ,
        title: 'Tech Stack',
        technologies : ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS']
    },
    {
        icon: FaSchool ,
        title: 'Education',
        technologies : ['(B.C.A) Bachorlers of computer application']
    },
    {
        icon: FaProjectDiagram ,
        title: 'Projects',
        technologies : ['Built more than 10+']
    },
]