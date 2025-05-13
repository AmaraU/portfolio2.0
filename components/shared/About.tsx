'use client'
import {
    IconBrandReact,
    IconBrandMongodb,
    IconBrandTypescript,
    IconBrandTailwind,
    IconBrandNextjs,
    IconBrandGit,
    IconServer2,
    IconBrandMysql,
    IconServer,
    IconBrandNodejs,
    IconBrandHtml5


} from "@tabler/icons-react";
import SlideIn from "./SlideIn";
import { motion } from "framer-motion";

const About = () => {

    return (
        <SlideIn direction='bottom'>
            <section className="px-8 md:px-16 lg:px-32 mb-24">
                <div className="container mx-auto flex flex-col items-center md:flex-row">
                    {/* Description */}
                    <div className="text-center md:text-left">



                        <h2 className="text-3xl text-center font-semibold mb-4 text-gray-300">About <span className="text-accent">Me</span> </h2>
                        <p className="font-light">
                            Hi, I'm a <span className="font-semibold">full-stack developer</span> with a soft spot for clean design, smooth animations, and thoughtful user experiences.
                            I enjoy building applications that not only work well but feel good to use—from the responsiveness of a button click to the way a card stacks and slides as you scroll.
                            Whether I'm working with React, Next.js, or Spring Boot, I'm always thinking about how to create interfaces and systems that make sense to real people.
                        </p>
                        <p className="font-light mt-5">
                            Over the years, I've contributed to a range of projects—from banking dashboards to learning platforms—turning complex requirements into functional, elegant solutions.
                            I'm comfortable switching between <span className="font-semibold">front-end</span> polish and <span className="font-semibold">back-end</span> logic, and I love the challenge of balancing both.
                            I'm currently focused on leveling up my back-end skills in Java and database architecture, while also sharpening my eye for details on the front end.
                        </p>
                        <p className="font-light mt-5">
                            I studied <span className="font-semibold">Software Engineering</span> at Drexel University, where I developed a strong foundation in both the theoretical and practical sides of building software.
                            That background continues to shape how I approach projects—balancing structure with creativity, and always thinking a few steps ahead.
                        </p>
                        {/* <p className="font-light mt-5">
                            I am always excited to take on new challenges and build innovative solutions that make a difference. Let's connect and see how we can
                            create something amazing together!
                        </p> */}
                    </div>
                </div>
            </section>
        </SlideIn>
    );
};

export default About;
