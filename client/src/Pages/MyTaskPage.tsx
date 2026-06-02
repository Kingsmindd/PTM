import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyTaskPage: React.FC = () => {
  return (
    <div className="    w-360  mt-20    ">
      <div className="w-360 mx-auto font-[Signika_Negative]">
        <div className="flex justify-between items-center w-360">
          <div>
            <p className="text-[50px]  font-medium text-[#292929] leading-100% tracking-normal">
              MyTasks
            </p>
          </div>
          <div className="flex font-[Signika Negative] gap-8 items-center text-[#974FD0] text-[24px] font-bold leading-100% tracking-normal ">
            <FaPlus />
            <p>Add New Task</p>
          </div>
        </div>

        <div className=" flex flex-col top-50">
          <div className="flex justify-between">
            <div>
              <p className="text-[#F38383] text-[24px] font-[Signika Negative] leading-100%">
                Urgent
              </p>
            </div>

            <div className="flex gap-4 text-[24px]  ">
              <Link
                to="/EditTask"
                className="flex items-center leading-100% tracking-normal font-medium bg-[#974FD0] py-2.5 px-6.5 rounded-lg text-[#FAF9FB] font-[Signika Negative]"
              >
                <FaRegEdit />
                Edit
              </Link>

              <button className="flex items-center  bg-[#FAF9FB] leading-100% tracking-normal font-medium  py-2.5 px-6.5 rounded-lg text-[#974FD0] font-[Signika Negative]">
                <RiDeleteBin6Line />
                <span>Delete</span>
              </button>
            </div>
          </div>
          <div className=" text-start flex flex-col gap-3 ">
            <h1 className="text-[#292929] font-medium text-[35px]">
              FinTech Website Update
            </h1>
            <p className=" text-[24px] font-normal  tracking-normal text-[#737171]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
              faucibus et magna. Interdum eu tempus ultricies cras neque mi.
              Eget tellus suspendisse et viverra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTaskPage;
