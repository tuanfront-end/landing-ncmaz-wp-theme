import React from "react";
import Heading from "./Heading";
import home1 from "images/home/1.png";
import home2 from "images/home/2.png";
import home3 from "images/home/3.png";
import home4 from "images/home/4.png";
import home5 from "images/home/5.png";
import home6 from "images/home/6.png";
import homeRTL from "images/home/rtl.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const SectionDemos = () => {
  const data = [
    {
      img: home1,
      text: "Home Page 1",
      subText: "Home Pre-built 1",
      link: "https://ncmaz.chisnghiax.com/",
    },
    {
      img: home2,
      text: "Home Page 2",
      subText: "Home Pre-built 2",
      link: "https://ncmaz.chisnghiax.com/home-2/",
    },
    {
      img: home3,
      text: "Home - Podcast, Music",
      subText: "Home Pre-built 3 for Podcast, Music",
      link: "https://ncmaz.chisnghiax.com/home-3/",
      tags: ["Podcast"],
    },
    {
      img: home4,
      text: "Home - Video",
      subText: "Home Pre-built 4 for Video category",
      link: "https://ncmaz.chisnghiax.com/home-4/",
      tags: ["Video"],
    },
    {
      img: home5,
      text: "Home - Gallery",
      subText: "Home Pre-built 5 for Gallery category",
      link: "https://ncmaz.chisnghiax.com/home-5/",
      tags: ["Gallery"],
    },
    {
      img: home6,
      text: "Home style 6",
      subText: "Home Pre-built 6",
      link: "https://ncmaz.chisnghiax.com/home-6/",
    },
    {
      img: homeRTL,
      text: "Demo RTL",
      subText: "Home default version RTL",
      link: "https://ncmaz-rtl.chisnghiax.com/",
      tags: ["Version RTL"],
    },
  ];

  const renderItem = (item: typeof data[number], index: number) => {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
        key={index}
        className="flex flex-col group relative rounded-3xl bg-slate-50 p-6  hover:bg-slate-100 "
      >
        <div className="relative z-0 aspect-[6/7] rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700">
          <img
            className="block absolute inset-0 object-cover object-top w-full h-full"
            src={item.img}
            alt={item.text}
          />
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center group-hover:text-sky-500">
            <h2 className="block text-base font-medium capitalize text-slate-900 group-hover:text-sky-500 transition-colors">
              <span className="absolute inset-0 rounded-3xl"></span>
              {item.text}
            </h2>
            <ArrowRightIcon className="w-4 h-4 transform -rotate-45 flex-none opacity-0 group-hover:opacity-100 ml-2" />
          </div>
          {item.tags?.map((tag, index) => (
            <div
              key={index}
              className="py-0.5 font-medium px-2.5 rounded-full border text-xs flex items-center leading-none border-red-400 text-red-400"
            >
              <span className="mb-0.5">{tag}</span>
            </div>
          ))}
        </div>
        <p className="block flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400">
          {item.subText}
        </p>
      </a>
    );
  };

  return (
    <section className="">
      <Heading className="text-center ">
        <i className="text-orange-500"> 7+</i> Home Pre-built
      </Heading>
      <p className="mt-4 lg:text-lg text-center  mx-auto max-w-screen-md">
        Modern, Elegant & Beautiful home pages for your magazine. <br /> We plan
        to show new demos regularly 🍕
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12">
        {data.map(renderItem)}
      </div>
    </section>
  );
};
