import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ service }) => {
  const { title, details, picture, price } = service;
  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
      <div className="relative w-full h-48">
        <img
          src={picture}
          className="object-cover w-full h-full rounded-t"
          alt="Plan"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
        <div>
          <div className="text-xl font-bold">{title}</div>
          <p className="text-sm my-3 text-gray-900">
            {details?.length >= 100 ? details.slice(0, 100) : details}
          </p>
          <div className="mt-1 mb-4 text-red-300 mr-1 text-xl font-medium sm:text-2xl">
            Price: ${price}
          </div>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium bg-teal-400 tracking-wide transition duration-200 rounded shadow-md hover:bg-teal-300"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
