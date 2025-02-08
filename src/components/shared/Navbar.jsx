import React from "react";
import { IoNotifications } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const username = "John Doe";
  return (
    <div className=" w-full flex-1 h-[75px]  border-b-[2px] border-gray-200 flex flex-row items-center justify-between px-10  ">
      <div>
        <p className=" text-axio-black font-medium text-xl">Welcome {username}</p>
      </div>
      <div className=" flex flex-row items-center gap-4 ">
        <button>
          <IoNotifications size={28} className=" text-axio-dark-blue " />
        </button>
        <div className="w-12 h-12 bg-axio-dark-blue outline outline-[1px] outline-gray-200 rounded-full flex items-center justify-center text-white font-bold uppercase">
          {username.charAt(0)+username.charAt(1)}
        </div>
        <button>
          <MdKeyboardArrowDown size={22} className=" text-gray-400 " />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
