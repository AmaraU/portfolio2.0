"use client";

import { useEffect, useState } from "react";
import { FloatingDockDemo } from "./Dock"
import SlideIn from "./SlideIn"

function HeroSection() {

  const textList = ["front-end developer", "back-end developer", "full-stack developer", "mobile developer"];
  const [ currentText, setCurrentText ] = useState('');
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ isDeleting, setIsDeleting ] = useState(false);
  const [ typingSpeed, setTypingSpeed ] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = textList[currentIndex];

      if (isDeleting) {
        setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText((prevText) => fullText.slice(0, prevText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
      }
    };
    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, currentIndex, textList, typingSpeed]);


  return (
    <SlideIn direction="top">
      <div className="xl:px-36 sm:px-32">
        <div className="relative isolate px-6 pt-14 lg:px-8">

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <p className="mt-6 text-lg font-light leading-8">Hey, I'm</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-accent sm:text-6xl">
                AMARA <span className="text-white">UDE</span>
              </h1>
              <p className="mt-6 text-lg font-light leading-8">
                And I am a <span className="text-accent font-bold">{currentText}</span>
              </p>
              {/* <p className="mt-6 text-lg font-light leading-8">
                I am based in <span className="font-extrabold text-gray-300">Nigeria</span>, passionate about creating web applications that are both functional and visually appealing. <span className="font-semibold text-gray-300">"Coding is not just a job for me, it’s a hobby that I deeply enjoy."</span>
              </p> */}
              <p className="mt-6 text-lg font-light leading-8">
                I love building fun and also useful tools and experiences. I'll obsess over a button hover just as much as a backend endpoint and I belive we should <span className="font-semibold text-gray-300">make coding fun again.</span>
                {/* When I'm not coding, you can find me trying to bake the perfect cinnamon roll or starting a book I'll never finish. */}
                {' '}“Programs must be written for people to read, and only incidentally for machines to execute.” 
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <FloatingDockDemo />
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >

          </div>
        </div>

      </div>
    </SlideIn>

  )
}

export default HeroSection