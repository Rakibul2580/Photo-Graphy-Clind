import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooke/useTitle";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  useTitle("Services");
  const services = useLoaderData();
  if (!services) {
    return (
      <h1 className="text-yellow-300 text-2xl text-center">Loading ...</h1>
    );
  }
  return (
    <div className="flex justify-center my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      {/* <PhotoProvider>
        <PhotoView
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkqkOkb9_9iDex4-ptTAblZyLYEAx1HpK4g&usqp=CAU"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkqkOkb9_9iDex4-ptTAblZyLYEAx1HpK4g&usqp=CAU"
            alt=""
          />
        </PhotoView>
      </PhotoProvider> */}
    </div>
  );
};

export default Services;
