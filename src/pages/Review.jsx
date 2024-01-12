import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

export const Review = () => {
  // to make useEffect run teice
  const [count, setCount] = useState(0);

  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    // update state to call useEffect twice
    setCount(1);
    console.log("method run");

    return () => {
      getReviews();
    };
  }, [count]);

  const getReviews = async () => {
    let response = await fetch(
      `${import.meta.env.VITE_HOST_API_URL}/api/reviews/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();

    if (response.status === 200) {
      console.log(data);
      setUserReviews(data);
    }
  };

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className=" py-8  bg-teal-700">
      <h1 className="font-playfair text-[3rem]   text-center text-yellow-400 mb-4 ">
        TESTIMONIALS
      </h1>
      {!userReviews && (
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            fill="#fff"
            className="ml-2 w-[5rem]  inline animate-spin"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M7.03 2.757a1 1 0 0 1 1.213-.727l4 1a1 1 0 0 1 .59 1.525l-2 3a1 1 0 0 1-1.665-1.11l.755-1.132a7.003 7.003 0 0 0-2.735 11.77 1 1 0 0 1-1.376 1.453A8.978 8.978 0 0 1 3 12a9 9 0 0 1 4.874-8l-.117-.03a1 1 0 0 1-.727-1.213zm10.092 3.017a1 1 0 0 1 1.414.038A8.973 8.973 0 0 1 21 12a9 9 0 0 1-5.068 8.098 1 1 0 0 1-.707 1.864l-3.5-1a1 1 0 0 1-.557-1.517l2-3a1 1 0 0 1 1.664 1.11l-.755 1.132a7.003 7.003 0 0 0 3.006-11.5 1 1 0 0 1 .039-1.413z"
              clip-rule="evenodd"
              data-original="#000000"
            />
          </svg>
        </div>
      )}

      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid px-6"
        columnClassName="my-masonry-grid_column"
      >
        {/* <div className=" flex gap-3 flex-wrap  transition duration-500    px-[9rem]  max-md:px-[1rem] max-sm:px-0"> */}
        {userReviews.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-easing="ease-in-linear"
            data-aos-duration="500"
            className="p-3 hover:bg-inherit transition duration-500    hover:text-yellow-400 bg-[#fffde3]"
          >
            <div className="flex">
              <div>
                {item.profile && (
                  <img
                    className="w-[10rem] ring-yellow-400 ring-2  "
                    src={import.meta.env.VITE_HOST_API_URL + item.profile}
                    alt={item.name}
                  />
                )}
              </div>
              <div className="self-center">
                <h1 className=" text-[3rem]  px-4 font-italino">{item.name}</h1>
              </div>
            </div>
            <p className="p-4  transition duration-500   font-playfair ">
              {item.body}
            </p>
          </div>
        ))}
      </Masonry>
      {/* </div> */}
    </div>
  );
};
