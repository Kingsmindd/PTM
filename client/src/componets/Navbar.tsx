import taskpng from "../assets/Group 1.png";
import eclispe from "../assets/Ellipse 1.png";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  // useEffect(() => {
  //   console.log(location.pathname);

  // })

  const allLinks = () => {
    return location.pathname === "/" ? (
      <>
        <Link to="/NewTask" className="text-[#292929] font-medium text-[22px]">
          NewTask
        </Link>
        <Link to="/MyTask" className="text-[#292929] font-medium text-[22px]">
          My Task
        </Link>
      </>
    ) : location.pathname === "/MyTask" ? (
      <Link to="/MyTask" className="text-[#292929] font-medium text-[22px]">
        My Task
      </Link>
    ) : location.pathname === "/NewTask" ? (
      <Link to="/NewTask" className="text-[#292929] font-medium text-[22px]">
        New Task
      </Link>
    ) : location.pathname === "/EditTask" ? (
      <Link to="/MyTask" className="text-[#292929] font-medium text-[22px]">
        All Tasks
      </Link>
    ) : null;
  };
  return (
    <div className=" mx-auto flex justify-between bg-[#FAF9FB] h-23.25 ">
      <div className="w-360  m-auto flex justify-between ">
        <Link to="/" className="flex items-center">
          <img src={taskpng} alt="" />
          <p className="font-semibold text-2xl">TaskDuty</p>{" "}
        </Link>

        <div className="flex gap-10  items-center ">
          {allLinks()}

          <img src={eclispe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
