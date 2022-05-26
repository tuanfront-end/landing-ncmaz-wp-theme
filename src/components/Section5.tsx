import React from "react";

const Section5 = () => {
  return (
    <section className="py-20">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
          The New Standard for Blog/Magazine
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Purchase this Template now and make your website
        </p>

        <div className="flex justify-center mt-8 space-x-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://themeforest.net/item/ncmaz-blog-magazine-react-template/33283311"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-700 border border-transparent shadow hover:bg-blue-800 rounded-full"
          >
            Purchase now
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chisnghiax.com/ncmaz/"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-800 bg-blue-200 border border-transparent hover:bg-blue-300 rounded-full"
          >
            Live demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section5;
