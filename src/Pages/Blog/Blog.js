import React from "react";
import useTitle from "../../hooke/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <section className="dark:bg-gray-800 mt-10 dark:text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  difference between sql and nosql{" "}
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Dec 2020
                </time>
                <p className="mt-3">
                  SQL databases are vertically scalable, while NoSQL databases
                  are horizontally scalable. SQL databases are table-based,
                  while NoSQL databases are document, key-value, graph, or
                  wide-column stores. SQL databases are better for multi-row
                  transactions, while NoSQL is better for unstructured data like
                  documents or JSON.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  What is JWT, and how does it work?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Jul 2019
                </time>
                <p className="mt-3">
                  JSON Web Token (JWT) is an open standard (RFC 7519) that
                  defines a compact and self-contained way for securely
                  transmitting information between parties as a JSON object.
                  This information can be verified and trusted because it is
                  digitally signed.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  What is the difference between javascript and NodeJS?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Jan 2016
                </time>
                <p className="mt-3">
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed.
                  Node. js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  How does NodeJS handle multiple requests at the same time?
                </h3>
                <time className="text-xs tracking-wide uppercase dark:text-gray-400">
                  Jan 2016
                </time>
                <p className="mt-3">
                  How NodeJS handle multiple client requests? NodeJS receives
                  multiple client requests and places them into EventQueue.
                  NodeJS is built with the concept of event-driven architecture.
                  NodeJS has its own EventLoop which is an infinite loop that
                  receives requests and processes them.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
