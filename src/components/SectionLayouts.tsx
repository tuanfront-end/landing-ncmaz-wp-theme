import React from "react";
import archiveImg from "images/archive.png";
import authorImg from "images/author.png";
import searchImg from "images/search.png";
import submitPostImg from "images/submitPost.png";
import editAccountImg from "images/editAccount.png";
import single3Img from "images/single3.png";
import singleVideoImg from "images/singleVideo.png";
import singleAudioImg from "images/singleAudio.png";
import singleGalleryImg from "images/singleGallery.png";
import Badge from "./Badge";

export const SectionLayouts = () => {
  const data = [
    {
      img: archiveImg,
      text: "Archive page",
      subText: "Category page",
      link: "https://ncmaz.netlify.app/about",
    },
    {
      img: authorImg,
      text: "Author page",
      subText: "Author page",
      link: "https://ncmaz.netlify.app/author/the-demo-author-slug",
    },
    {
      img: searchImg,
      text: "Search page",
      subText: "Search page",
      link: "https://ncmaz.netlify.app/archive/the-demo-archive-slug",
    },
    {
      img: singleAudioImg,
      text: "Single Audio",
      subText: "Single format Audio",
      link: "https://ncmaz.netlify.app/archive/the-demo-archive-slug",
    },
    {
      img: submitPostImg,
      text: "Submission post page",
      subText: "Need login - (guest/guest)",
      link: "https://ncmaz.netlify.app/archive/the-demo-archive-slug",
      tag: "HOT!",
    },
    {
      img: editAccountImg,
      text: "Edit Account page",
      subText: "Need login - (guest/guest)",
      link: "https://ncmaz.netlify.app/archive/the-demo-archive-slug",
      tag: "HOT!",
    },
    {
      img: single3Img,
      text: "Single style 3",
      subText: "Single pages",
      link: "https://ncmaz.netlify.app/archive/the-demo-archive-slug",
    },
    {
      img: singleVideoImg,
      text: "Single Video",
      subText: "Single format Video",
      link: "https://ncmaz.netlify.app/archive/the-demo-archive-slug",
    },

    {
      img: singleGalleryImg,
      text: "Single Gallery",
      subText: "Single format Gallery",
      link: "https://ncmaz.netlify.app/archive/the-demo-archive-slug",
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
        <div className="relative z-0 h-0 aspect-w-9 aspect-h-12 rounded-xl shadow-xl overflow-hidden">
          <img
            className="block absolute inset-0 object-cover rounded-xl"
            src={item.img}
            alt={item.text}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-opacity-0 group-hover:bg-opacity-50 transition-all text-slate-100 duration-200  bg-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>
        <div className="relative mt-1 p-3 text-center">
          <div className="inline-flex items-center space-x-2">
            <span className="block text-base font-medium capitalize text-slate-900">
              {item.text}
            </span>
            {item.tag && <Badge name={item.tag} color="bg-red-700" />}
          </div>
          {item.subText && (
            <span className="block text-xs text-slate-600">{item.subText}</span>
          )}
        </div>
      </a>
    );
  };

  return (
    <section className="mt-6">
      <div className="px-4 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-center">
          Template layouts 🧬
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600 mx-auto">
          Please login with demo account{" "}
          <i>
            <u>(guest/guest)</u>
          </i>{" "}
          to access all the amazing pages of the theme.
        </p>
        <div className="mt-4 flex items-center justify-center">
          <Badge
            name="username: guest ---- password: guest"
            className="!text-sm !px-5 !py-2"
            color="bg-sky-700"
          >
            Username: guest{" "}
            <span className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12H4"
                />
              </svg>
            </span>{" "}
            Password: guest
          </Badge>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-7 gap-y-11 mt-12">
          {data.map(renderItem)}
          <div className="shadow-2xl h-0 aspect-w-9 aspect-h-12 bg-slate-100 bg-opacity-60 rounded-xl ">
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="uppercase tracking-widest text-2xl">MORE ++</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
