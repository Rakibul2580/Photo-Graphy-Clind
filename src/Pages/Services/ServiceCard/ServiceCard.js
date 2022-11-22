import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, price, details, picture, _id } = service;
  return (
    <div className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <PhotoProvider>
        <PhotoView className="" src={picture}>
          <img
            src={picture}
            alt=""
            className="saturate-200 object-cover object-center w-full rounded-t-md h-96 dark:bg-gray-500"
          />
        </PhotoView>
      </PhotoProvider>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
          <p className="dark:text-gray-100">
            {details?.length >= 100 ? details.slice(0, 100) : details}
          </p>
          <p className=" text-red-300 text-xl font-medium">Price: {price}</p>
        </div>
        <Link
          to={`/service/${_id}`}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Vew Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
