import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooke/useTitle";
import Banner from "./Banner/Banner";
import HomeCard from "./HomeCard/HomeCard";
import HomeHero from "./HomeHero/HomeHero";
import Rating from "./Rating/Rating";

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://photo-server-rakibul2580.vercel.app")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Banner />
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
                    id="bc9273ce-29bb-4565-959b-714607d4d027"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Services</span>
            </span>{" "}
          </h2>
        </div>
        <div className="grid gap-10 row-gap-8  sm:row-gap-10 lg:grid-cols-3">
          {services?.map((service) => (
            <HomeCard key={service._id} service={service}></HomeCard>
          ))}
        </div>
      </div>
      <div className="text-center m-5">
        <Link to="/services" className="btn btn-warning">
          See All
        </Link>
      </div>
      <HomeHero />
      <Rating />
    </div>
  );
};

export default Home;
