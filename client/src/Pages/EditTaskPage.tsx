import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

const EditTaskPage: React.FC = () => {
  return (
    <div className=" w-360 mt-20">
      <div className="w-360 m-auto flex flex-col gap-10 font-[Signika_Negative] ">
        <p className="flex items-center  text-[50px] pb-10 font-bold text-start  font-[Signika_Negative]">
          <MdOutlineArrowBackIos />
          <span>Edit Task</span>
        </p>
        <div className=" flex flex-col gap-15 relative">
          <div>
            <label className="  absolute bg-white px-2  left-20 -top-7 text-[#9C9C9C]  font-normal text-[30px]  font-[Signika_Negative] ">
              {" "}
              Task Title
            </label>
            <input
              type="text"
              placeholder="E.g Project Defense, Assignment..."
              className=" outline-none bg-transparent text-gray-700 w-360 border-[#9C9C9C] border-2 h-21"
            />
          </div>

          <div className="relative">
            <label className=" left-20 absolute bg-white px-2 -top-7 text-[#9C9C9C]  font-normal text-[30px]  font-[Signika_Negative]">
              Description
            </label>
            <input
              type="text"
              placeholder="Briefly describe your task"
              className="  outline-none bg-transparent text-[22px] tracking-normal leading-[100%] text-[#292929] w-360 border-[#9C9C9C] border-2 h-65.5 text-start pb-50 ps-7 "
            />
          </div>
          <div className="relative">
            <label className=" absolute left-20 bg-white px-2 -top-7 text-[30px]  text-[#9C9C9C]  font-normal   font-[Signika_Negative] ">
              Tags
            </label>
            <input
              type="text"
              placeholder=""
              className=" outline-none bg-transparent text-gray-700 w-360 border-[#9C9C9C] border-2 h-21"
            />
            <div className="flex absolute gap-210 top-7 right-80 text-[22px]  text-[#9C9C9C]  font-normal   font-[Signika_Negative]">
              <div className="flex gap-4">
                <p className="bg-[#9C9C9C]  text-[#CCCCCC] rounded-md">
                  Urgent
                </p>
                <p className=" bg-[#9C9C9C]  text-[#CCCCCC] rounded-md">
                  Important
                </p>
              </div>
              <button>
                <SlArrowDown />
              </button>
            </div>
          </div>
        </div>

        <div>
          <button className="bg-[#974FD0] py-2.5 px-6.5 w-360 rounded-lg font-[Signika_Negative] text-[35px] text-[#FAF9FB]">
            Done
          </button>

          <button className="bg-[white] py-2.5 px-6.5 w-360 rounded-lg font-[Signika_Negative] text-[35px] text-[#974FD0]">
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
