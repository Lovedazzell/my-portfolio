import React, { useState, Suspense } from "react";
import { sectionImage, scroll } from "../assets/images/Index.js";
import { navLink, socialLink } from "../components/Helper";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import Index from "../components/three/Index.jsx";
import { Link } from "react-scroll";

function Home() {
  const [dropShow, setDropShow] = useState(false);

  const divStyle = {
    backgroundImage: `url(${sectionImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  };
  const handleClick = () => {
    console.log("click");
    if (dropShow) {
      gsap.to(".dropBox", {
        top: "-30rem",
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });
    } else {
      gsap.to(".dropBox", {
        top: "0.7rem",
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });
    }
    setDropShow(!dropShow);
  };

  return (
    <>
      <div style={divStyle} className="flex    ">
        <div className="w-[60%] max-sm:w-[100%]  max-sm:z-50  bg-[#3B39394D]">
          <p className=" font-italino px-[30px] max-sm:px-[15px] max-sm:mt-[50px]  drop-shadow-[0_25px_18px_rgb(250,204,21)] text-zinc-100 text-[14rem] ">
            hello!
          </p>
          <div className="  font-playfair flex mx-[30px] items-center">
            <h1 className="text-white text-xl ">
              <span className="text-6xl  max-sm:text-9xl font-italino mr-2  text-white">
                I am
                <span className="text-2xl font-serif mx-2   text-[#F60085]">
                  Love Dazzell
                </span>
              </span>
              <br />
              Full-stack web developer <br />
              UI/UX design <br />
              Mobile application developer
            </h1>
          </div>
        </div>
        <div className="flex  grow  z-50  flex-row-reverse">
          {/* menu open icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-white absolute cursor-cell top-4 right-4  md:hidden"
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>

          {/* drop down nav links */}

          <div className="absolute   top-[-30rem] w-full px-4 dropBox ">
            <div className=" transition duration-500 ease-in-out   backdrop-blur-md  flex items-center  flex-col rounded">
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-12 h-12 text-white absolute cursor-cell top-2
                  right-2 "
                    onClick={handleClick}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <ul className="flex flex-wrap flex-col  mx-5  mt-9  ">
                  {navLink.map((item) => (
                    <li
                      key={item.href}
                      className=" text-center my-2 rounded transition  px-20 py-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500  duration-500 ease-in-out bg-yellow-200   "
                    >
                      <Link
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="transition text-black duration-500 ease-in-out text-lg font-serif font-thin align-middle p-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="  mx-5 flex">
                  {socialLink.map((item) => (
                    <li key={item.link} className="my-3 ">
                      <a href={item.link} target="_blank">
                        <img
                          src={item.img}
                          className=" h-[3rem] transition-height duration-500 ease-in-out hover:h-[3.5rem] "
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* social media links */}

          <ul className="  mx-5 z-20  md:flex hidden">
            {socialLink.map((item) => (
              <li key={item.link} className="my-3 ">
                <a href={item.link}>
                  <img
                    src={item.img}
                    className=" h-[2.5rem] transition-height duration-500 ease-in-out hover:h-[3rem] "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
