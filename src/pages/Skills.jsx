import React, { useEffect, useRef } from "react";

import {
  REACT,
  HTML,
  CSS,
  PYTHON,
  JQUERY,
  DJANGO,
  JAVASCRIPT,
  BOOTSTRAP,
  PHOTOSHOP,
  AWS,
  FIGMA,
  THREE,
} from "../assets/images/Index.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const oneRef = useRef(null);
  const sixRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      oneRef.current,
      { rotate: 0 },
      {
        rotate: 770,
        duration: 3,

        // repeat: 500,
        ease: "none",
        scrollTrigger: {
          end: "bottom -40%",
          start: "top bottom ",
          trigger: oneRef.current,
          scrub: true,
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      sixRef.current,
      { rotate: 0 },
      {
        rotate: 360,
        repeat: 500,
        duration: 3,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: sixRef.current,
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div id="skill" className="bg-[#FAF9EC] PY-5  min-h-screen ">
      <h1 className="font-playfair text-[3rem] text-center text-[#e9efca]  drop-shadow-[0_4px_0_rgb(250,204,21)]  mb-4 ">
        SKILLS
      </h1>

      <div className="flex flex-wrap  gap-3  transition duration-500   justify-center px-[9rem]  max-md:px-[1rem] max-sm:px-0">
        {/* box start */}
        <div className="p-3  transition duration-500    justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img ref={oneRef} src={REACT} className="w-[7rem]" alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            REACT
          </h1>
        </div>
        {/* box start */}

        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={HTML} className="w-[7rem]" alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            HTML
          </h1>
        </div>
        {/* box start */}

        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={CSS} className="w-[7rem]" alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            CSS
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500  justify-between flex flex-col  drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={PYTHON} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            PYTHON
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={DJANGO} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            DJANGO
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500    justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img ref={sixRef} src={JQUERY} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            JQUERY
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={BOOTSTRAP} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            BOOTSTARP
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={JAVASCRIPT} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            JAVA SCRIPT
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={PHOTOSHOP} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            PHOTOSHOP
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={AWS} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            AWS
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={FIGMA} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            FIGMA
          </h1>
        </div>
        {/* box start */}
        <div className="p-3  transition duration-500  justify-between flex flex-col drop-shadow-[0_4px_0_rgb(250,204,21)] hover:bg-yellow-100  ring-[#292929] ring-1">
          <img src={THREE} className="w-[7rem]   " alt="" />
          <h1 className="text-center font-playfair  drop-shadow-[0_4px_0_rgb(250,204,21)] ">
            THREE
          </h1>
        </div>
        {/* box start */}
      </div>
    </div>
  );
};
