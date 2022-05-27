import { CONSTANTS } from "constants/constants";
import React from "react";
import Badge from "./Badge";

const Section1 = () => {
  return (
    <section className=" text-left md:max-w-none md:text-center">
      {/* <!-- Main Hero Content --> */}
      <Badge
        name=" WORDPRESS THEME"
        color="bg-sky-700 sm:!text-xs !px-5 !py-2"
      />
      <h1 className="mt-4 text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl  tracking-tight dark:text-white">
        <span className="block">Modern & Creative</span>
        <span className="block text-indigo-700">Blog, News & Magazine</span>
      </h1>
      <p className="block mt-7 text-lg text-slate-700 max-w-3xl mx-auto ">
        Ncmaz Powerful functionality of a combination of WordPress, Graphql,
        React & Tailwindcss. <br /> A perfect starting point for your next blog,
        news, magazine site.
      </p>
      <div className="flex mt-12 justify-center">
        <a
          href="#demos"
          className="flex-shrink-0 inline-flex mr-3 items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 text-white bg-indigo-700 hover:bg-indigo-600 rounded-full shadow-md"
        >
          View Demos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
        </a>
        <a
          href={CONSTANTS.purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 rounded-full bg-indigo-50 text-indigo-900 shadow-md hover:bg-slate-50"
        >
          Purchase Now
        </a>
      </div>
      {/* <!-- End Main Hero Content --> */}
    </section>
  );
};

export default Section1;
