import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooke/useTitle";

const AddService = () => {
  useTitle("AddService");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleServiceSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const details = form.details.value;
    const email = user?.email;
    const title = form.ServiceName.value;
    const price = form.price.value;
    const picture = form.photo.value;
    const serviceInfo = {
      details,
      email,
      title,
      price,
      picture,
    };

    fetch("https://photo-server-rakibul2580.vercel.app/myservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Add Service Success");
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="relative mt-10">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center items-center xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Please Add Service
                </h3>
                <form onSubmit={handleServiceSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="ServiceName"
                      className="inline-block mb-1 font-medium"
                    >
                      Service Name
                    </label>
                    <input
                      placeholder="Service Name"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="ServiceName"
                      name="ServiceName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="details"
                      className="inline-block mb-1 font-medium"
                    >
                      Service Details
                    </label>
                    <input
                      placeholder="Service Details"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="details"
                      name="details"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="price"
                      className="inline-block mb-1 font-medium"
                    >
                      Service Price
                    </label>
                    <input
                      placeholder="Price"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="price"
                      name="price"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="photo"
                      className="inline-block mb-1 font-medium"
                    >
                      Service Photo
                    </label>
                    <input
                      placeholder="Photo URL"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="photo"
                      name="photo"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md btn-primary focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
