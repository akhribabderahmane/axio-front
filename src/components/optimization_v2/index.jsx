import React from "react";
import Title from "../shared/Title";
import { PiExportBold } from "react-icons/pi";
import MyMap from "./Map"; // Ensure this path is correct and the file exists

const OptimisationPage02 = () => {
  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="flex flex-row justify-between items-center">
        <Title
          title="Ordre optimisé des destinations :"
          desc="Visualisez l’itinéraire optimisé et consultez les détails en un clic ! 🚀"
        />
        <button className="flex flex-row justify-center items-center py-2 px-4 gap-2 bg-axio-white-blue border-axio-dark-blue border-2 rounded-xl text-lg text-axio-dark-blue">
          <PiExportBold size={22} className="text-axio-dark-blue" />
          <p>Exporter</p>
        </button>
      </div>
      {/* <div>
        <MyMap />
      </div> */}
    </div>
  );
};

export default OptimisationPage02;