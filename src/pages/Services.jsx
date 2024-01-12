import React, { useEffect, useRef, useState } from "react";
import {
  Ig,
  Phone,
  Vs,
  Circle,
  Figma,
  IgBg,
  VsBg,
  phoneBg,
  circleBg,
  flower,
  figmaBg,
} from "../assets/images/Index.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
export const Services = () => {
  const [sWidth, setSWidth] = useState(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);

  // useEffect(() => {
  //   setSWidth(window.innerWidth);
  //   console.log(sWidth);
  //   // const tl = gsap.timeline();

  //   gsap.fromTo(
  //     one.current,
  //     { right: -150 },
  //     {
  //       right: 0,
  //       duration: 1,
  //       ease: sWidth < "600" ? "none" : "back.inOut",
  //       scrollTrigger: {
  //         start: "top 85%",
  //         end: "top 70%",
  //         trigger: one.current,
  //         toggleActions: "restart none none none",

  //         // snap: {
  //         // },
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     two.current,
  //     { right: -150 },
  //     {
  //       right: 0,
  //       duration: 1.2,
  //       ease: sWidth < "600" ? "none" : "back.inOut",
  //       scrollTrigger: {
  //         trigger: two.current,
  //         start: "top 85%",
  //         end: "top 70%",
  //         toggleActions: "restart none none none",

  //         // snap: {
  //         // },
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     three.current,
  //     { right: -150 },
  //     {
  //       right: 0,
  //       duration: 1.4,
  //       ease: sWidth < "600" ? "none" : "back.inOut",
  //       scrollTrigger: {
  //         trigger: three.current,
  //         start: "top 85%",
  //         end: "top 70%",
  //         toggleActions: "restart none none none",

  //         // snap: {
  //         // },
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     four.current,
  //     { right: -150 },
  //     {
  //       right: 0,
  //       duration: 1,
  //       ease: sWidth < "600" ? "none" : "back.inOut",
  //       scrollTrigger: {
  //         trigger: four.current,
  //         start: "top 85%",
  //         end: "top 70%",
  //         toggleActions: "restart none none none",

  //         // snap: {
  //         // },
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     five.current,
  //     { right: -150 },
  //     {
  //       right: 0,
  //       duration: 1.2,
  //       ease: sWidth < "600" ? "none" : "back.inOut",
  //       scrollTrigger: {
  //         trigger: five.current,
  //         start: "top 85%",
  //         end: "top 70%",
  //         toggleActions: "restart none none none",

  //         // snap: {
  //         // },
  //       },
  //     }
  //   );
  // }, [sWidth]);

  return (
    <>
      <div id="service" className=" relative  py-8 bg-[#292929] ">
        <img
          src={flower}
          className=" left-0 absolute   max-sm:hidden bottom-0 w-[20rem]"
          alt=""
        />
        <h1 className="font-playfair text-[3rem] text-center text-[#e9efca] mb-4 ">
          SERVICES
        </h1>
        <div
          id="content"
          className="flex flex-wrap  gap-3 justify-center px-[9rem]  max-md:px-[1rem] max-sm:px-0"
        >
          {/* box start */}
          <div
            ref={one}
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="600"
            className=" w-[17rem]  sec1  max-sm:w-[80%] transition duration-500  hover:ring-0 hover:bg-black  ring-1 ring-[#e9efca]  relative"
          >
            <img className="w-10 m-3 " src={Figma} alt="" />
            <img
              className="w-[9rem] m-3  bottom-0 right-0 absolute"
              src={figmaBg}
              alt=""
            />

            <h1 className="font-playfair text-[#e9efca] text-[1.8rem] pl-3 ">
              UI/UX Designer
            </h1>
            <p className="text-[#e9efca] px-3  mb-9 mt-2 text-[0.9rem]  font-playfair ">
              Crafting intuitive, visually compelling experiences. A blend of UX
              strategy and UI aesthetics, creating seamless, user-centric
              designs that elevate digital interactions.
            </p>
          </div>
          {/* box end */}
          {/* box start */}
          <div
            ref={two}
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="600"
            className=" w-[17rem] max-sm:w-[80%] transition duration-500  hover:ring-0 hover:bg-black  ring-1 ring-[#e9efca]  relative"
          >
            <img className="w-10 m-3  " src={Circle} alt="" />
            <img
              className="w-[9rem] m-3  bottom-0 right-0 absolute"
              src={circleBg}
              alt=""
            />

            <h1 className="font-playfair text-[#e9efca] text-[1.8rem] pl-3 ">
              Graphic Designer
            </h1>
            <p className="text-[#e9efca] px-3  mb-9 mt-2 text-[0.9rem]  font-playfair ">
              Transforming concepts into captivating visuals. A fusion of
              creativity and technique, delivering impactful designs that
              resonate and inspire.
            </p>
          </div>
          {/* box end */}
          {/* box start */}
          <div
            ref={three}
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="600"
            className=" w-[17rem] max-sm:w-[80%] transition duration-500  hover:ring-0 hover:bg-black  ring-1 ring-[#e9efca]  relative"
          >
            <img className="w-10 m-3  " src={Vs} alt="" />
            <img
              className="w-[9rem] m-3  bottom-0 right-0 absolute"
              src={VsBg}
              alt=""
            />

            <h1 className="font-playfair text-[#e9efca] text-[1.8rem] pl-3 ">
              Web Development
            </h1>
            <p className="text-[#e9efca] px-3  mb-9 mt-2 text-[0.9rem]  font-playfair ">
              Building responsive, dynamic websites. Expertise in front-end and
              back-end technologies, crafting functional, user-friendly digital
              solutions with clean code and engaging interfaces.
            </p>
          </div>
          {/* box end */}
          {/* box start */}
          <div
            ref={four}
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="600"
            className=" w-[17rem] max-sm:w-[80%] transition duration-500  hover:ring-0 hover:bg-black  ring-1 ring-[#e9efca]  relative"
          >
            <img className="w-10 m-3  " src={Ig} alt="" />
            <img
              className="w-[9rem] m-3  bottom-0 right-0 absolute"
              src={IgBg}
              alt=""
            />

            <h1 className="font-playfair text-[#e9efca] text-[1.8rem] pl-3 ">
              Social Media Post Designing
            </h1>
            <p className="text-[#e9efca] px-3  mb-9 mt-2 text-[0.9rem]  font-playfair ">
              Social Media Post Designing", desc: "Designing captivating social
              media visuals that engage and enhance brand communication across
              diverse platforms.
            </p>
          </div>
          {/* box end */}
          {/* box start */}
          <div
            ref={five}
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="600"
            className=" w-[17rem] max-sm:w-[80%] transition duration-500  hover:ring-0 hover:bg-black  ring-1 ring-[#e9efca]  relative"
          >
            <img className="w-10 m-3  " src={Phone} alt="" />
            <img
              className="w-[9rem] m-3  bottom-0 right-0 absolute"
              src={phoneBg}
              alt=""
            />

            <h1 className="font-playfair text-[#e9efca] text-[1.8rem] pl-3 ">
              Mobile Apps
            </h1>
            <p className="text-[#e9efca] px-3  mb-9 mt-2 text-[0.9rem]  font-playfair ">
              Creating seamless mobile experiences. Proficient in iOS and
              Android development, crafting user-centric apps with intuitive
              functionality and captivating interfaces.
            </p>
          </div>
          {/* box end */}
        </div>
      </div>
    </>
  );
};
