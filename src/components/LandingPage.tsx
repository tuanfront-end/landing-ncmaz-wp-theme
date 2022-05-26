import React from "react";
import { Nav } from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import { SectionDemos } from "./SectionDemos";

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 flex flex-col overflow-hidden justify-center items-center z-0">
        <span className="bg-[#ef233c] w-52 h-52 ml-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="bg-[#04868b] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 "></span>
      </div>
      <div className="fixed inset-0 flex flex-col overflow-hidden z-0">
        <span className="bg-gradient-to-t from-[#FF008A] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-96"></span>
        <span className="bg-gradient-to-b from-[#7e7d7c] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-96 "></span>
      </div>

      <div className="relative z-10">
        <Nav />
        <div className="container mx-auto">
          <Section1 />
          <SectionDemos />
          {/* <SectionLayouts /> */}
          <Section2 />
          {/* <Section3 /> */}
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
