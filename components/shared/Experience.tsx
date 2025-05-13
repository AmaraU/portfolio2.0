'use client'
import {
  IconBrandReact,
  IconBrandMongodb,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandDocker,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandNextjs,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconServer2,
  IconDatabase,
  IconBrandGithub,
  IconBrandPython,
  IconBrandRedux,
  IconBrandGit,
  IconServer,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import SlideIn from "./SlideIn";

function Experience() {

    // { name: "ReactJs", logo: <IconBrandReact size={48} className="text-blue-500" /> },
    // { name: "Next.js", logo: <IconBrandNextjs size={48} className="text-purple-500" /> },
    // { name: "Node.js", logo: <IconBrandNodejs size={48} className="text-blue-800" /> },
    // { name: "Python", logo: <IconBrandPython size={48} className="text-purple-800" /> },
    // { name: "JavaScript", logo: <IconBrandJavascript size={48} className="text-blue-300" /> },
    // { name: "TypeScript", logo: <IconBrandTypescript size={48} className="text-purple-300" /> },
    // { name: "GitHub", logo: <IconBrandGithub size={48} className="text-purple-600" /> },
    // { name: "Tailwind", logo: <IconBrandTailwind size={48} className="text-blue-600" /> },
    // { name: "Spring Boot", logo: <IconDatabase size={48} className="text-purple-400" /> },
    // { name: "Redux", logo: <IconBrandRedux size={48} className="text-blue-400" /> },
    // { name: "SQL", logo: <IconServer2 size={48} className="text-purple-700" /> },
    // { name: "Docker", logo: <IconBrandDocker size={48} className="text-blue-700" />}

    const technologies = [
        { name: "React", logo: <IconBrandReact size={24} className="text-blue-500" /> },
        { name: "Next.js", logo: <IconBrandNextjs size={24} className="text-purple-500" /> },
        { name: "Node.js", logo: <IconBrandNodejs size={24} className="text-blue-800" /> },
        { name: "PostgreSQL", logo: <IconServer2 size={24} className="text-purple-700" /> },
        { name: "Tailwind", logo: <IconBrandTailwind size={24} className="text-blue-600" /> }
    ];
    const technologies2 = [
        { name: "React", logo: <IconBrandReact size={24} className="text-blue-500" /> },
        { name: "Python", logo: <IconBrandPython size={24} className="text-purple-800" /> },
        { name: "HTML", logo: <IconBrandHtml5 size={24} className="text-blue-700" /> },
        { name: "GitHub", logo: <IconBrandGithub size={24} className="text-purple-600" /> },
        { name: "Power BI", logo: <IconServer2 size={24} className="text-blue-400" />, },
    ];
    const technologies3 = [
        { name: "React", logo: <IconBrandReact size={24} className="text-blue-500" /> },
        { name: "Node.js", logo: <IconBrandNodejs size={24} className="text-indigo-800" /> },
        { name: "HTML", logo: <IconBrandHtml5 size={24} className="text-blue-700" /> },
        { name: "GitHub", logo: <IconBrandGithub size={24} className="text-purple-600" /> },
        { name: "JavaScript", logo: <IconBrandJavascript size={24} className="text-blue-300" /> },
    ];
    // const technologies4 = [
    //     { logo: <IconBrandReact size={24} className="text-blue-500" />, name: "React" },
    //     { logo: <IconBrandNodejs size={24} className="text-teal-500" />, name: "Node" },
    //     { logo: <IconBrandHtml5 size={24} className="text-zinc-100" />, name: "HTML" },
    //     { logo: <IconServer2 size={24} className="text-green-500" />, name: "Power BI" },
    //     // { logo: <IconBrandTailwind size={24} className="text-teal-500" />, name: "Tailwind" },
    //     // { logo: <IconBrandGit size={24} className="text-orange-600" />, name: "Git" },
    // ];

    const skillVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <SlideIn direction='left'>
            <div className="py-12 px-24 my-12 mt-10 mb-36">
                <div className="">
                    <p className=" text-center mb-12 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                        Work <span className="text-accent">Experience</span>
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                        <li>
                            <h4 className="text-xl font-bold text-zinc-400">Full-Stack Developer, <i>The FifthLab</i></h4>
                            <span className="text-sm text-gray-500">March 2024 - Present</span>
                            <p className="mt-2 text-md font-light">
                                I transformed Figma designs into responsive React.js applications tailored for financial companies, with a strong focus on usability and meeting client expectations. On the backend, I implemented REST APIs using Node.js, Express, and PostgreSQL. I also optimized these applications for accessibility, cross-browser compatibility, and performance.
                                <span className="block mt-2 font-semibold">Technologies Used <span aria-hidden="true">→</span></span>
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                {technologies.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center"
                                        variants={skillVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <button
                                            key={index}
                                            className="flex flex-col items-center justify-center p-3 rounded-md  transition-transform transform  focus:outline-none"
                                        >
                                            <span className="text-lg">{tech.logo}</span>
                                            <span className="mt-1 text-xs text-gray-500">{tech.name}</span>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </li>
                        <li>
                            <h4 className="text-xl font-bold text-zinc-400">Frontend Developer Intern, <i>Kasi Cloud Inc.</i></h4>
                            <span className="text-sm text-gray-500">March 2021 - Sept 2021</span>
                            <p className="mt-2 text-md font-light">
                                I built a dynamic company website using HTML, CSS, and JavaScript. Alongside that, I created detailed documentation to improve internal processes and support team management—using Microsoft Office tools. I also developed a new onboarding program for future co-op participants — earning recognition for its innovation.
                                <span className="block mt-2 font-semibold">Technologies Used <span aria-hidden="true">→</span></span>
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                {technologies2.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center"
                                        variants={skillVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <button
                                            key={index}
                                            className="flex flex-col items-center justify-center p-3 rounded-md transition-transform transform  focus:outline-none"
                                        >
                                            <span className="text-lg">{tech.logo}</span>
                                            <span className="mt-1 text-xs text-gray-700">{tech.name}</span>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </li>
                        <li>
                            <h4 className="text-xl font-bold text-zinc-400">Software Engineer Intern, <i>Sharing Excess</i></h4>
                            <span className="text-sm text-gray-500">March 2020 - September 2020</span>
                            <p className="mt-2 text-md font-light">
                                I translated designs into a web application that helped businesses sell surplus food items at discounted prices. I also worked with another team to develop a mobile app that let users purchase these items. Additionally, I designed user interfaces for the company's website, ensuring a smooth experience for users and businesses.
                                <span className="block mt-2 font-semibold">Technologies Used <span aria-hidden="true">→</span></span>
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                {technologies3.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center"
                                        variants={skillVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <button
                                            key={index}
                                            className="flex flex-col items-center justify-center p-3 rounded-md  transition-transform transform  focus:outline-none"
                                        >
                                            <span className="text-lg">{tech.logo}</span>
                                            <span className="mt-1 text-xs text-gray-500">{tech.name}</span>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </li>
                        {/* <li>
                            <h4 className="text-xl font-bold text-zinc-400">Full-Stack Developer, The FifthLab</h4>
                            <span className="text-sm text-gray-500">March 2024 - Present</span>
                            <p className="mt-2 text-md font-light">
                                I Founded and led the development of Appvarsity, A platform designed to support Aptech students. I am responsible for overseeing both front-end and back-end development, managing the team, and ensuring we give valuable tools and essential resources to enhance students educational needs.
                                <span className="block mt-2 font-semibold">Technologies Used <span aria-hidden="true">→</span></span>
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                {technologies4.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center"
                                        variants={skillVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <button
                                            key={index}
                                            className="flex flex-col items-center justify-center p-3 rounded-md  transition-transform transform  focus:outline-none"
                                        >
                                            <span className="text-lg">{tech.logo}</span>
                                            <span className="mt-1 text-xs text-gray-500">{tech.name}</span>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </SlideIn>
    );
}

export default Experience;
