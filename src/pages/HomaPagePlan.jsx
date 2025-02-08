import React from "react";
import { useNavigate } from "react-router-dom";
import pic1 from "../assets/PlanifierTrajet.png"
import pic2 from "../assets/ListTrans.png"
import pic3 from "../assets/ListDemande.png"


const HomePage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="p-10 min-h-screen  flex flex-col items-start">
      {/* Title & Subtitle */}
      <h1 className="text-3xl font-bold text-gray-900">Sync Ops</h1>
      <p className="text-gray-600 mt-2 max-w-lg">
        Gérez efficacement vos livraisons en consultant les transporteurs, les demandes et en optimisant la
        planification des trajets.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-2 gap-8 mt-12 w-full max-w-3xl">
        {/* Planifier un trajet */}
        <div
          className="w-full bg-white shadow-md rounded-2xl p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
          onClick={() => navigate("/planifier")} // Navigate to Planifier page
        >
          <img src={pic1} alt="Planifier un trajet" className="w-28 h-28" />
          <p className="mt-4 text-lg font-semibold text-gray-800">Planifier un trajet</p>
        </div>

        {/* Transporteurs */}
        <div
          className="w-full bg-white shadow-md rounded-2xl p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
          onClick={() => navigate("/transporteurs")} // Navigate to Transporteurs page
        >
          <img src={pic2} alt="Transporteurs" className="w-28 h-28" />
          <p className="mt-4 text-lg font-semibold text-gray-800">Consulter la liste des transporteurs</p>
        </div>

        {/* Demandes (Full Width) */}
        <div
          className="col-span-2 w-full bg-white shadow-md rounded-2xl p-6 flex flex-col items-center cursor-pointer hover:shadow-lg transition"
          onClick={() => navigate("/demandes")} // Navigate to Demandes page
        >
          <img src={pic3} alt="Demandes" className="w-28 h-28" />
          <p className="mt-4 text-lg font-semibold text-gray-800">Consulter la liste des demandes</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
