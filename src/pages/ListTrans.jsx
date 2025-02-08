import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const TransporterList = () => {
  // Dummy data inside the component
  const transporters = [
    { name: "Transco Logistics", vehicleType: "Camion 12T", capacity: 12, pricing: "500€/trajet", available: true },
    { name: "FastFreight", vehicleType: "Fourgon 3.5T", capacity: 3.5, pricing: "150€/trajet", available: false },
    { name: "EcoTruck", vehicleType: "Camion 7.5T", capacity: 7.5, pricing: "300€/trajet", available: true },
  ];

  return (
    <div className="flex flex-col bg-axio-white min-h-screen p-8">
      {/* Header Section */}
      <div className="flex items-center mb-4 space-x-4">
        <h2 className="text-2xl font-semibold text-axio-black">Liste des Transporteurs</h2>
      </div>

      {/* Subtitle */}
      <p className="mb-6 text-axio-black-light text-lg">
        Consultez les transporteurs disponibles et leurs stratégies de tarification.
      </p>

      {/* List of Transporters */}
      {transporters.length > 0 ? (
        transporters.map((transporter, index) => {
          // Determine background color based on availability
          const availabilityClass = transporter.available ? "bg-axio-green/10" : "bg-axio-red/10";

          return (
            <div key={index} className={`p-6 rounded-xl shadow-xl mb-4 flex justify-between items-center border ${availabilityClass}`}>
              {/* Left Section - Transporter Details */}
              <div className="text-axio-black flex-1">
                <p className="text-lg font-semibold">
                  <strong>Nom du transporteur:</strong> {transporter.name}
                </p>
                <p className="text-base"><strong>Type de véhicule:</strong> {transporter.vehicleType}</p>
                <p className="text-base"><strong>Capacité maximale:</strong> {transporter.capacity} tons</p>
                <p className="text-base"><strong>Tarification:</strong> {transporter.pricing}</p>
                <p className="text-base"><strong>Disponibilité:</strong> {transporter.available ? "Vrai" : "Non"}</p>
              </div>

              {/* Right Section - Details Button */}
              <button className="flex items-center bg-axio-blue text-axio-white px-5 py-2 rounded-lg shadow-md hover:bg-axio-mid-blue transition">
                <FaInfoCircle className="mr-2" /> Voir les détails
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-center text-axio-black-light text-lg">Aucun transporteur trouvé.</p>
      )}
    </div>
  );
};

export default TransporterList;
