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
    vue,
    materialUi,
    bootstrap
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
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Vue Developer",
        icon: backend,
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
        name: "TypeScript",
        icon: typescript,
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
    {
        name: "vue",
        icon: vue,
    },
    {
        name: "Material-UI",
        icon: materialUi,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
];

const experiences = [
    {
        title: "Russian Language Course",
        company_name: "People's Friendship University of Russia (RUDN)",
        icon: '',
        iconBg: "#383E56",
        date: "Sept 2016 - May 2017",
        points: [
            "Learned the Russian language at the preparatory language faculty of RUDN.",
        ],
    },
    {
        title: "Bachelor's degree",
        company_name: "People's Friendship University of Russia (RUDN)",
        icon: '',
        iconBg: "#383E56",
        date: "Sept 2017 - May 2021",
        points: [
            "Studied for my bachelor's degree in a 4 years program at the Science faculty at RUDN.",
            "Graduated with a Bachelor degree in Applied Mathematics and Informatics"
        ],
    },
    {
        title: "Web Developer",
        company_name: "Freelance",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2019 - Jan 2022",
        points: [
            "Learning web development using HTML, JS, CSS and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility via demo projects.",
            "Practiced by building demo web applications"
        ],
    },
    {
        title: "Master's degree",
        company_name: "People's Friendship University of Russia (RUDN)",
        icon: '',
        iconBg: "#383E56",
        date: "Sept 2021 - May 2023",
        points: [
            "Studied for my Master's degree in a 2 years program at the Science faculty at RUDN.",
            "Graduated with a Master degree in Applied Mathematics and Informatics",
            "Specialised in Mathematical Models in Interdisciplinary Research ",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "TradeLink",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2022 - August 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Vue Developer",
        company_name: "TradeLink",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "August 2023 - April 2023",
        points: [
            "Developing and maintaining web applications using Vue.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Web-developer",
        company_name: "Freelance",
        icon: '',
        iconBg: "#E6DEDD",
        date: "April 2023 - Present",
        points: [
            "Mastering web development in more detail ",
            "Expanding my web development knowledge, learning new Material from most front-end related technologies"
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
        name: "Food order App",
        description:
            "Web-based platform that allows users to search and order meals from a restaurant's website online.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/rextambua/",
    },
    {
        name: "Youtube clone",
        description:
            "A youtube clone app using http and REST API with similar youtube actions",

        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Material-UI",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/rextambua/",
    },
    {
        name: "3D-portfolio",
        description:
            "A interactive 3D portfolio showcasing my abilities, work experience and contact information.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "TailwindCss",
                color: "green-text-gradient",
            },
            {
                name: "ThreeJS",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/rextambua/",
    },
];

export { services, technologies, experiences, testimonials, projects };