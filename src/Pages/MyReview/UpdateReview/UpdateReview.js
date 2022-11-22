import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../../hooke/useTitle";

const UpdateReview = () => {
  useTitle("UpdateReview");
  const data = useLoaderData();
  const navigate = useNavigate();
  const email = data[0].userEmail;

  const handleUpdate = (event) => {
    event.preventDefault();
    const review = event.target.update.value;

    fetch(
      `https://photo-server-rakibul2580.vercel.app/update/${data[0]?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ review }),
      }
    )
      .then((res) => res.json())
      .then((data) => navigate(`/myreview/${email}`))
      .catch((error) => console.log(error));
  };
  return (
    <section className="p-6 dark:text-gray-100">
      <form
        onSubmit={handleUpdate}
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight"></h2>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Update Tha Review
          </label>
          <textarea
            id="message"
            type="text"
            name="update"
            required
            placeholder="Update Review ..."
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

export default UpdateReview;
