import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useTitle from "../../hooke/useTitle";

const Details = () => {
  useTitle("Details");
  const service = useLoaderData();
  const { details, picture, price, title, _id } = service;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://photo-server-rakibul2580.vercel.app/reviews/${title}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(reviews[0]);
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-900">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={picture}
            alt=""
            className="saturate-200 w-full h-60 sm:h-96 dark:bg-gray-200 rounded-md"
          />
          <div className="z-10 shadow-lg rounded-md p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
            <div className="space-y-2">
              <h1 className="inline-block text-2xl font-semibold sm:text-3xl">
                {title}
              </h1>
            </div>
            <div className="dark:text-gray-900">
              <p>{details}</p>
              <p className="mt-5 text-xl text-red-400">Price: {price}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <Link
              to={`/addreview/${_id}`}
              className="btn btn-warning rounded-md"
            >
              Add Review
            </Link>
          </div>

          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="d9d7687a-355f-4502-8ec4-7945db034688"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">All</span>
                </span>{" "}
                Reviews
              </h2>
            </div>
            <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
              {reviews?.map((review) => (
                <div
                  key={review?._id}
                  className="p-5 border-2 duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between  h-12 mb-4 rounded-full ">
                    <img
                      src={review?.userPhoto}
                      className="w-16 h-16 rounded-full"
                      alt=""
                    />
                    <ul className="flex space-x-1 text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </ul>
                  </div>
                  <h6 className="mb-2 leading-5 text-xl font-bold text-black">
                    {review?.userName}
                  </h6>
                  <p className="text-sm font-normal text-gray-900">
                    {review?.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
