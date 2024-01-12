import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

export const Contact = () => {
  const [email, setEmail] = useState("");

  const handleClick = async () => {
    if (!validator.isEmail(email)) {
      toast("Enter valid email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    let response = await fetch(
      `${import.meta.env.VITE_HOST_API_URL}/api/subscribe/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
    let data = await response.json();

    if (response.status === 200) {
      console.log(data);
      toast("Request Submited", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div id="contact" className="bg-[#292929] ">
      <h1 className="font-playfair text-[3rem] text-center text-[#fff7f7]     ">
        CONTACT
      </h1>
      <div className="    flex justify-center items-center py-5">
        <div className=" w-[70%] bg-[#fffde3] ring-2 ring-yellow-300	  p-5 max-sm:w-[90%] ">
          <h1 className="mt-6 mb-3 text-center  font-playfair text-xl">
            Get regular updates by subscribing to my newsletter
          </h1>
          <div className=" flex  py-5 px-3   items-center flex-wrap  mb-6  gap-3">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="  grow input"
            />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <button
              onClick={handleClick}
              className="font-playfair   border-rose-800   border-2    text-xl border-1 hover:bg-rose-800 hover:text-white  py-1 px-2"
            >
              Subscribe
            </button>
          </div>
          <hr className="my-3 " />
          <a href="https://wa.me/+919855227743?text=Thank you for reaching out to us! We appreciate your interest and will be in touch shortly to assist you">
            <button className="btn  font-playfair rounded   hover:text-white  border-green-800   border-2    hover:bg-green-800  py-1 px-2">
              Lets Talk
            </button>
          </a>
          <span className="mx-2">on Whatsapp</span>
          <div className="flex justify-center items-center">
            <hr className="bg-black  grow" />
            <span className="mx-4">or</span>
            <hr className="grow" />
          </div>
          <div className="text-lg">
            Social media :
            <span className="hover:border-b-2 border-rose-800">
              <a
                target="_blank"
                className="font-playfair mx-1"
                href="https://www.instagram.com/lovedazzell?igsh=YWJ6c3dhOTJnODd0"
              >
                Instagram
              </a>
            </span>
            <span className="hover:border-b-2 border-rose-800">
              <a
                target="_blank"
                className="font-playfair mx-1"
                href="https://www.linkedin.com/in/lovedazzell?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                Linkdin
              </a>
            </span>
            <span className="hover:border-b-2 border-rose-800">
              <a
                target="_blank"
                className="font-playfair mx-1"
                href="mailto:lovepreetdazzell@gmail.com"
              >
                Mail
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
