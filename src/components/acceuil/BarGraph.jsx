import React from "react";
import BarChart from "./BarChart";

const BarGraph = () => {
  return (
    <div className=" flex flex-col gap-8">
      <div>
        <BarChart/>
      </div>
      <div className=" w-full px-12 flex flex-row  justify-between gap-20 "> 
        <button className=" w-full flex flex-row gap-4 items-center px-8 py-4  bg-axio-green/90 hover:bg-axio-green  rounded-2xl transition-all duration-200">
            <img src="/public/acceuil/add.svg" alt="add" />
            <p className=" font-bold text-axio-white ">Optimiser un nouveau trip</p>
        </button>
        <button className=" w-full flex flex-row gap-4 items-center px-8 py-4  bg-axio-orange/90 hover:bg-axio-orange  rounded-2xl transition-all duration-200">
            <img src="/public/acceuil/history.svg" alt="add" />
            <p className=" font-bold text-axio-white ">Voir l’historique d’optimisation</p>
        </button>
      </div>
    </div>
  );
};

export default BarGraph;
