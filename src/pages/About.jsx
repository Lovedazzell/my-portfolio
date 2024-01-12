import React, { useEffect, useRef } from "react";
import { me, bulb } from "../assets/images/Index.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     textRef.current,
  //     { scaleX: 1.3, y: -20, opacity: 0 },
  //     {
  //       scaleX: 1,
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,

  //       scrollTrigger: {
  //         trigger: textRef.current,
  //         start: "top 80%",
  //         end: "top 60%",
  //         toggleActions: "restart none none none",
  //       },
  //     }
  //   );
  // }, []);
  return (
    <>
      <div
        id="about"
        className="h-[100vh] relative overflow-hidden  bg-[#292929] flex"
      >
        <div>
          <p className="w-[55%] z-10  text-[#e8e5da]  text-justify  font-playfair  max-sm:left-8 max-sm:w-[80%]  max-sm:top-[25rem]  top-[6rem]   hover:text-[#edd36d]   right-11 absolute ">
            <h1 className="font-playfair text-[3rem]    ">ABOUT</h1>
            My passion lies in transforming abstract ideas into captivating
            designs that resonate deeply with audiences. Specializing in
            creating visually stunning experiences, I channel innovation and
            user-centricity to craft designs that not only elevate brands but
            also inspire and leave an indelible mark in the digital sphere. My
            expertise extends to seamlessly blending creativity with
            functionality, ensuring that every design is not just aesthetically
            pleasing but also purposeful and engaging.
            <p className="my-1">
              <span className="ml-2">Driven</span> by a commitment to
              excellence, I consistently push the boundaries of conventional
              design, aiming to deliver solutions that surpass expectations and
              stand out in the dynamic digital landscape. With a meticulous
              attention to detail and a deep understanding of user behavior, I
              aim to create experiences that connect on a profound level,
              forging lasting connections between brands and their audiences. My
              ultimate goal is to bring ideas to life through impactful and
              innovative design, leaving a lasting impression in every project
              undertaken.
            </p>
          </p>
          <img
            src={bulb}
            alt=""
            className="absolute bottom-[1rem]    max-sm:bottom-[-2rem]  max-sm:w-[35rem]  w-[30rem] left-[2rem] max-sm:left-[-1rem]  "
          />
        </div>
      </div>
    </>
  );
}
