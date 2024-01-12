import Home from "./pages/Home";
import "./core.scss";
import About from "./pages/About";
import { Services } from "./pages/Services";
import { Review } from "./pages/Review";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { FooterSec } from "./pages/FooterSec";
import { Link } from "react-scroll";
import { navLink } from "./components/Helper";
import { scroll } from "./assets/images/Index.js";

export default function App() {
  return (
    <div className="overflow-hidden">
      <ul className="md:flex hidden z-10  fixed  mx-5   ">
        {navLink.map((item) => (
          <li key={item.href} className=" my-4">
            <Link
              to={item.href}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-white transition duration-500 ease-in-out  font-serif font-thin align-middle hover:text-yellow-300 hover:ring-2  p-1"
            >
              {item.name}
            </Link>
            <span className="mx-3 text-white">|</span>
          </li>
        ))}
      </ul>
      <Home />
      <div
        // style={{ overflow: "hidden" }}
        className="absolute  right-5   bottom-0 z-0  max-sm:z-20  max-sm:bottom-[-20rem]   max-sm:right-0 max-sm:w-[95%]   h-[100%] w-[45rem]  "
      >
        <div className="container ">
          <main className="max-sm:ring-1 ring-[#F0EAD2]">
            <header>
              <h2 className="subheader">— Devlopment</h2>
              <h1>
                Where we bring imaginative user interfaces <em>to life.</em>
              </h1>
              <p className="text-[#F0EAD2]">
                Motivated Web Developer with an extensive knowledge of web
                development, design, and coding, as well as experience in a wide
                range of programming languages, frameworks, and tools. Proven
                success in developing and deploying applications, websites, and
                web services.
              </p>
            </header>

            <img src={scroll} alt="" />

            <div>
              <h2>Our Mission</h2>
              <p className="text-[#F0EAD2]">
                As a web developer, our mission revolves around crafting
                innovative digital experiences. We specialize in creating
                user-centric websites that blend cutting-edge technology with
                intuitive design. Our focus is on delivering high-performance,
                responsive, and scalable web solutions. By staying at the
                forefront of industry trends and leveraging expertise, we aim to
                exceed client expectations, ensuring their online presence
                stands out in today's competitive landscape.
              </p>
            </div>
          </main>
        </div>

        <a
          href="https://youtu.be/cxwZfcoiUSE"
          target="_blank"
          data-keyframers-credit
          style={{ color: "#FFF", zIndex: " 10" }}
        ></a>
      </div>

      <About />
      <Services />
      <Skills />
      <Review />
      <Projects />
      <Contact />
      <FooterSec />
    </div>
  );
}
