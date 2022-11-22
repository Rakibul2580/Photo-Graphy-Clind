import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooke/useTitle";

const Review = () => {
  useTitle("Review");
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const title = service.title;
    const serviceImg = service.picture;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const reviewInfo = {
      serviceImg,
      review,
      title,
      userEmail,
      userName,
      userPhoto,
    };
    fetch("https://photo-server-rakibul2580.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => navigate(`/service/${service?._id}`))
      .catch((error) => console.log(error));
  };
  return (
    <section className="p-6 mt-10 mb-52 dark:text-gray-100">
      <form
        onSubmit={handleReview}
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">
          {service?.title}
        </h2>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Add Tha Review
          </label>
          <textarea
            id="message"
            type="text"
            name="review"
            required
            placeholder="Add Review ..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Review;
