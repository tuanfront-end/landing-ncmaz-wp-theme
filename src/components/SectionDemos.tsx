import React from "react";
import Heading from "./Heading";
import home1 from "images/home/1.png";
import home2 from "images/home/2.png";
import home3 from "images/home/3.png";
import home4 from "images/home/4.png";
import home5 from "images/home/5.png";
import home6 from "images/home/6.png";
import homeRTL from "images/home/rtl.png";
import Badge from "./Badge";
import { ArrowRightIcon } from "@heroicons/react/outline";

export const SectionDemos = () => {
  const data = [
    {
      img: home1,
      text: "Home style 1",
      subText: "Home Default",
      link: "https://ncmaz.chisnghiax.com/",
      tags: ["popular"],
    },
    {
      img: home2,
      text: "Home style 2",
      subText: "Home Default",
      link: "https://ncmaz.chisnghiax.com/home-2/",
    },
    {
      img: home3,
      text: "Home - Podcast/Music",
      subText: "Home Default",
      link: "https://ncmaz.chisnghiax.com/home-3/",
    },
    {
      img: home4,
      text: "Home - Video",
      subText: "Home Default",
      link: "https://ncmaz.chisnghiax.com/home-4/",
      tags: ["new!"],
    },
    {
      img: home5,
      text: "Home - Gallery",
      subText: "Home Default",
      link: "https://ncmaz.chisnghiax.com/home-5/",
      tags: ["new!"],
    },
    {
      img: home6,
      text: "Home style 6",
      subText: "Home Default",
      link: "https://ncmaz.chisnghiax.com/home-6/",
      tags: ["new!"],
    },
    {
      img: homeRTL,
      text: "Home - RTL",
      subText: "Home RTL",
      link: "https://ncmaz-rtl.chisnghiax.com/",
      tags: ["RTL"],
    },
  ];

  const renderItem = (item: typeof data[number], index: number) => {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
        key={index}
        className="flex flex-col group hover:-translate-y-1.5 transform transition-transform will-change-transform"
      >
        <div className="relative z-0 h-0 aspect-w-10 aspect-h-12">
          {item.tags?.map((tag, index) => (
            <div key={index} className="absolute top-1 left-1.5 z-10">
              <Badge
                className="relative uppercase"
                name={tag}
                color={
                  tag === "new!"
                    ? "bg-red-700"
                    : tag === "popular"
                    ? "bg-green-700"
                    : undefined
                }
              />
            </div>
          ))}
          <img
            className="block absolute inset-0 object-cover rounded-xl shadow-2xl"
            src={item.img}
            alt={item.text}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-opacity-10 group-hover:bg-opacity-40 transition-all text-slate-100 duration-200 bg-slate-900">
            <div
              className="w-14 h-14 flex items-center justify-center bg-slate-900/70 text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity transform duration-200 rounded-full"
              title="View page"
            >
              <ArrowRightIcon className="w-6 h-6 transform -rotate-45" />
            </div>
          </div>
        </div>
        <div className="p-3 text-center">
          <span className="block text-base font-medium capitalize text-slate-100">
            {item.text}
          </span>
          <span className="block text-xs text-slate-400">{item.subText}</span>
        </div>
      </a>
    );
  };

  return (
    <section className="dark text-slate-200">
      <Heading className="text-center text-slate-100">
        {" "}
        <i className="text-orange-500"> 7+</i> Home Pages
      </Heading>
      <p className="mt-4 text-lg text-center text-slate-300 mx-auto max-w-screen-md">
        Modern, Elegant & Beautiful home pages for your magazine. <br /> We plan
        to show new demos regularly 🍕
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-11 mt-12">
        {data.map(renderItem)}
        <div className="shadow-2xl h-0 aspect-w-10 aspect-h-12 bg-slate-800 bg-opacity-60 rounded-xl border-2 border-slate-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="uppercase tracking-widest text-2xl">Coming soon</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
