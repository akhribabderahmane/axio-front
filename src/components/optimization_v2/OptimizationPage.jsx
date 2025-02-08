import React from "react";
import { Download, ArrowLeft } from "lucide-react";

const OptimizationResult = ({ data, onBack }) => {
  return (
    <div className="min-h-screen p-10 bg-axio-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center">
        <button onClick={onBack} className="flex items-center text-axio-black text-lg font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" /> Retour
        </button>
        <button className="flex items-center px-4 py-2 bg-axio-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition">
          <Download className="w-5 h-5 mr-2" /> Exporter
        </button>
      </div>

      {/* Title & Description */}
      <p className="text-axio-black-light mt-2 text-lg">
      <p className="text-2xl ml-0 font-bold text-axio-dark-blue p-4">Optimisation du chargement</p> 

        Optimise l’espace du camion selon le volume, le poids et les priorités pour une livraison efficace. 🚛📦
      </p>

      {/* Route Order */}
      <div className="bg-axio-light-blue p-4 rounded-lg shadow-md mt-6 w-full max-w-4xl">
        <h3 className="text-lg font-semibold text-axio-black flex items-center">
          <span className="text-axio-red mr-2">📍</span> Ordre des stations considérés
        </h3>
        <p className="text-axio-black-light mt-1 text-base font-medium">
          {data.routeOrder.join(" ➝ ")}
        </p>
      </div>

      {/* Vehicle Information */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 w-full max-w-4xl">
        <p className="px-6 py-3 bg-axio-black-light/50 text-axio-white rounded-lg text-lg font-medium shadow-md">
          Véhicule : {data.vehicleID}
        </p>
        <p className="px-6 py-3 bg-axio-sky-blue/50 text-axio-white rounded-lg text-lg font-medium shadow-md">
          Capacité : {data.capacity}
        </p>
        <p className="px-6 py-3 bg-axio-green/50 text-axio-white rounded-lg text-lg font-medium shadow-md">
          Taux de remplissage : {data.fillRate}%
        </p>
      </div>

      {/* Image Visualization */}
      {data.imageUrl && (
        <div className="mt-8 w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
          <img src={data.imageUrl} alt="Optimisation" className="w-full rounded-md" />
        </div>
      )}
    </div>
  );
};

export default OptimizationResult;
