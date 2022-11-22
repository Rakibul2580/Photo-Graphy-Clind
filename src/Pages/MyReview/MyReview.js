import React, { useContext, useEffect, useState } from "react";
import toast, { ToastBar } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooke/useTitle";

const MyReview = () => {
  useTitle("MyReview");
  const [reviews, setReviews] = useState([]);
  const [render, setRender] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://photo-server-rakibul2580.vercel.app/myreviews/${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, [user?.email, render]);

  const handleDelete = (id) => {
    fetch(`https://photo-server-rakibul2580.vercel.app/reviewdelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Deleted successfully");
        setRender((render) => !render);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {reviews[0]?._id ? (
        <>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 row-gap-5 md:grid-cols-2">
              {reviews?.map((review) => (
                <div
                  key={review?._id}
                  className="relative border-2 p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                >
                  <div className="relative flex flex-col h-full p-4 bg-white rounded-sm lg:items-center lg:flex-row">
                    <div className="mb-6 mr-6 lg:mb-0">
                      <div className="flex items-center justify-center w-52 h-auto rounded-full  ">
                        <img
                          src={review?.serviceImg}
                          className="w-full h-full lg:w-full lg:h-full rounded-md"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex  flex-col justify-between flex-grow">
                      <div>
                        <h6 className="mb-2 font-bold text-xl leading-5">
                          {review?.title}
                        </h6>
                        <p className="my-3 text-md font-medium text-gray-900">
                          {review?.review}
                        </p>
                      </div>
                      <div className="space-x-2">
                        <button
                          onClick={() => handleDelete(review?._id)}
                          className="btn btn-warning"
                        >
                          Delete
                        </button>
                        <Link
                          to={`/updateReview/${review?._id}`}
                          className="btn btn-primary"
                        >
                          Update
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-5xl text-yellow-500 my-10 text-center">
            No Review Were Added
          </h1>
        </>
      )}
    </div>
  );
};

export default MyReview;
