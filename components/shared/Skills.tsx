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
} from "@tabler/icons-react";
// import { SiJava, SiJavascript } from 'react-icons/si';
import { motion } from "framer-motion";
import SlideIn from "./SlideIn";

function Skills() {
  const skills = [
    // { name: "ReactJs", logo: <IconBrandReact size={48} className="text-blue-500" /> },
    // { name: "Next.js", logo: <IconBrandNextjs size={48} className="text-white" /> },
    // { name: "Node.js", logo: <IconBrandNodejs size={48} className="text-green-500" /> },
    // { name: "Python", logo: <IconBrandPython size={48} className="text-orange-800" /> },
    // { name: "JavaScript", logo: <IconBrandJavascript size={48} className="text-yellow-500" /> },
    // { name: "TypeScript", logo: <IconBrandTypescript size={48} className="text-blue-800" /> },
    // { name: "GitHub", logo: <IconBrandGithub size={48} className="text-orange-500" /> },
    // { name: "Tailwind", logo: <IconBrandTailwind size={48} className="text-teal-300" /> },
    // { name: "Spring Boot", logo: <IconDatabase size={48} className="text-grey-400" /> },
    // { name: "SQL", logo: <IconServer2 size={48} className="text-purple-400" /> },
    // { name: "Redux", logo: <IconBrandRedux size={48} className="text-green-800" /> },
    // { name: "Docker", logo: <IconBrandDocker size={48} className="text-indigo-700" /> }

    { name: "ReactJs", logo: <IconBrandReact size={48} className="text-blue-500" /> },
    { name: "Next.js", logo: <IconBrandNextjs size={48} className="text-purple-500" /> },
    { name: "Node.js", logo: <IconBrandNodejs size={48} className="text-blue-800" /> },
    { name: "Python", logo: <IconBrandPython size={48} className="text-purple-800" /> },
    { name: "JavaScript", logo: <IconBrandJavascript size={48} className="text-blue-300" /> },
    { name: "TypeScript", logo: <IconBrandTypescript size={48} className="text-purple-300" /> },
    { name: "GitHub", logo: <IconBrandGithub size={48} className="text-purple-600" /> },
    { name: "Tailwind", logo: <IconBrandTailwind size={48} className="text-blue-600" /> },
    { name: "Spring Boot", logo: <IconDatabase size={48} className="text-purple-400" /> },
    { name: "Redux", logo: <IconBrandRedux size={48} className="text-blue-400" /> },
    { name: "SQL", logo: <IconServer2 size={48} className="text-purple-700" /> },
    { name: "Docker", logo: <IconBrandDocker size={48} className="text-blue-700" /> }
  ];


  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="skills" className="py-12 px-24 my-12 mt-10 mb-36">
      <SlideIn direction="bottom">
        <p className="text-center font-light mb-14 text-gray-400">
          Here are some technologies that I am fluent in and have used in various projects <span aria-hidden="true">→</span>
        </p>
      </SlideIn>
      <div id="about" className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            variants={skillVariants} // Apply the animation variants
            initial="hidden" // Initial animation state
            whileInView="visible" // Animation state when the element is in view
            viewport={{ once: true, amount: 0.2 }} // Controls when the element should animate
            transition={{ duration: 0.5, delay: index * 0.1 }} // Duration and delay for a staggered effect
          >
            {skill.logo}
            <span className="mt-2 text-sm font-light">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
