import React from "react";
import Frame0ne from "../assets/Images/bro.png";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="w-360 mx-auto flex gap-90 mt-20 ">
      <div className="flex flex-col gap-8 w-133.75 font-[Signika_Negative]">
        <p className="w-117.5 font-[Signika Negative] text-5xl leading-15 tracking-normal font-medium text-start ">
          Manage your Tasks on <span className="text-[#974FD0]">TaskDuty</span>
        </p>
        <p className="text-[#737171] text-[24px] leading-100% tracking-normal text-start font-medium h-38.25">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
          sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
          tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
          semper porttitor. Nec accumsan.
        </p>{" "}
        <Link
          to="/MyTask"
          className="border-2 bg-[#974FD0] py-2.5 px-6.25 w-70 text-[#FAF9FB]  font-medium rounded-lg font-[Signika Negative] h-12.5  mt-15 text-center pb-3 text-[24px]"
        >
          Go To My Task
        </Link>
      </div>
      <div className="">
        <img src={Frame0ne} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
