import { Nav } from "components/Nav";
import Section1 from "components/Section1";
import Section2 from "components/Section2";
import Section3 from "components/Section3";
import Section4 from "components/Section4";
import Section5 from "components/Section5";
import Section6 from "components/Section6";
import { SectionDemos } from "components/SectionDemos";
import { SectionLayouts } from "components/SectionLayouts";
import React from "react";

function App() {
  return (
    <div className="relative">
      <div className="fixed inset-0 flex flex-col overflow-hidden justify-center items-center z-0">
        <span className="bg-[#ef233c] w-52 h-52 ml-40 rounded-full mix-blend-multiply filter blur-3xl opacity-5 lg:w-96 lg:h-96"></span>
        <span className="bg-[#04868b] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-5 lg:w-96 lg:h-96 "></span>
      </div>
      <div className="fixed inset-0 flex flex-col overflow-hidden z-0">
        <span className="bg-gradient-to-t from-[#FF008A] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="bg-gradient-to-b from-[#7e7d7c] w-52 h-52 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 "></span>
      </div>

      <div className="relative z-10">
        <Nav />
        <div className="container pb-20 pt-16">
          <Section1 />
        </div>

        <div id="demos" className="py-20 bg-slate-900/90 container rounded-3xl">
          <SectionDemos />
        </div>
        <div id="layouts" className="py-20 container !px-4 rounded-3xl">
          <SectionLayouts />
        </div>

        <div className=" bg-slate-900  rounded-3xl dark text-slate-200">
          <div className="container ">
            <Section2 />
            <Section3 />
            <Section4 />
          </div>
        </div>

        <div className="container">
          <Section5 />
          <Section6 />
        </div>
      </div>
    </div>
  );
}

export default App;
