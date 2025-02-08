import React from "react";
import { IoMdTrendingUp } from "react-icons/io";

const StatsCard = ({ stat }) => {
  return (
    <div className=" flex-1 flex flex-col gap-3 bg-white p-5 py-7 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] transition-shadow duration-300">
      <div className=" flex flex-row gap-3 items-center">
        {stat.icon}
        <p className="text-axio-black capitalize font-medium ">{stat.title}</p>
      </div>
      <div>
        <p className=" text-4xl font-bold text-axio-black ">{stat.value}</p>
      </div>
      <div className=" flex flex-row gap-2 items-center">
        <div className=" flex flex-row gap-2 items-center">
          <IoMdTrendingUp size={20} className=" text-axio-green " />
          <p className=" text-axio-green  text-lg font-bold">
            {stat.improvement}%
          </p>
        </div>
        <p className=" text-sm text-gray-300">dans le dernier mois</p>
      </div>
    </div>
  );
};

export default StatsCard;
