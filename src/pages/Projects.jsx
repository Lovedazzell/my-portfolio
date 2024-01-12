import React from "react";
import { savemore, random, trezunt, hra } from "../assets/images/Index.js";
import Masonry from "react-masonry-css";
import Tilt from "react-parallax-tilt";

export const Projects = () => {
  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <div id="project" className="min-h-screen    bg-[#fffde3]">
      <h1 className="font-playfair text-[3rem] text-center text-[#6c6c6c]  drop-shadow-[0_4px_0_rgb(250,204,21)]   ">
        PROJECTS
      </h1>

      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid px-6 mt-5"
        columnClassName="my-masonry-grid_column"
      >
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div className="     p-3 shadow-lg ring-1  hover:bg-[#e3e0c0]  ring-orange-300 hover:ring-0">
            <img src={random} className="" alt="" />
            <div className="p-7">
              <p>
                An educational website offering diverse courses, featuring a
                blog and video subscription service. Providing a range of
                courses, it caters to varied learning needs.
              </p>
              <div className="my-3  flex-wrap flex gap-3  font-playfair">
                <span className=" bg-[#092E20] p-1  text-white">DJANGO</span>
                <span className=" bg-[#e34c26] p-1  text-white">HTML</span>
                <span className=" bg-[#264de4] p-1  text-white">CSS</span>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div className="p-3 shadow-lg ring-1  hover:bg-[#e3e0c0]  ring-orange-300 hover:ring-0">
            <img src={savemore} className="" alt="" />
            <div className="p-7">
              <p>
                An integrated platform offering multi-utility services such as
                mobile recharges, bill payments, and functioning as a digital
                piggy bank for secure savings and transactions.
              </p>
              <div className="my-4  flex-wrap flex gap-3  font-playfair">
                <span className=" bg-[#092E20] p-1  text-white">DJANGO</span>
                <span className=" bg-[#e34c26] p-1  text-white">HTML</span>
                <span className=" bg-[#264de4] p-1  text-white">CSS</span>
                <span className=" bg-[#6B71E3] p-1  text-white">STRIPE</span>
                <span className=" bg-[#563d7c] p-1  text-white">BOOTSTRAP</span>

                <span className=" bg-[#FFD700] p-1  text-white">
                  JAVA SCRIPT
                </span>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div className="p-3 shadow-lg ring-1  hover:bg-[#e3e0c0]  ring-orange-300 hover:ring-0 ">
            <img src={trezunt} className="" alt="" />
            <div className="p-7">
              <p>
                An innovative online casino destination providing a diverse
                array of games designed for users to test their luck and
                potentially win lucrative cash prizes. With a wide selection of
                entertaining games, it offers an immersive and rewarding gaming
                experience.
              </p>
              <div className="my-4  flex-wrap flex gap-3  font-playfair">
                <span className=" bg-[#092E20] p-1  text-white">DJANGO</span>
                <span className=" bg-[#e34c26] p-1  text-white">HTML</span>
                <span className=" bg-[#264de4] p-1  text-white">CSS</span>
                <span className=" bg-[#0d94fb] p-1  text-white">RAZORPAY</span>
                <span className=" bg-[#FFD700] p-1  text-white">
                  JAVA SCRIPT
                </span>
                <span className=" bg-[#092E20] p-1  text-white">
                  REST Framework
                </span>
                <span className=" bg-[#092E20] p-1  text-white">Channels</span>
                <span className=" bg-[#563d7c] p-1  text-white">BOOTSTRAP</span>
                <span className=" bg-[#9DCE5C] p-1  text-white">CELERY</span>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div className="p-3 shadow-lg ring-1  hover:bg-[#e3e0c0]  ring-orange-300 hover:ring-0 ">
            <img src={hra} className="" alt="" />
            <div className="p-7">
              <p>
                For a Singapore-based cleaning company, we optimize the platform
                to effortlessly connect customers with a wide range of services
                and facilitate job opportunities for those seeking employment in
                the industry.
              </p>
              <div className="my-4  flex-wrap flex gap-3  font-playfair">
                <span className=" bg-[#092E20] p-1  text-white">DJANGO</span>
                <span className=" bg-[#264de4] p-1  text-white">CSS</span>
                <span className=" bg-[#61dbfb] p-1  text-white">REACT</span>
                <span className=" bg-[#092E20] p-1  text-white">
                  REST Framework
                </span>
                <span className=" bg-[#563d7c] p-1  text-white">BOOTSTRAP</span>
              </div>
              <a
                className="text-red-600 underline"
                href="https://universalhra.com/"
                target="_blank"
              >
                -Visit Site
              </a>
            </div>
          </div>
        </Tilt>
      </Masonry>
    </div>
  );
};
