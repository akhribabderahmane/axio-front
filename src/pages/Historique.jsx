import React from 'react'
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const Historique = ({trips}) => {
  return (
    <div className="flex flex-col  min-h-screen p-6">
      {/* Header Section */}
        <h2 className="text-2xl font-semibold text-axio-dark-blue">
          Historique des optimisations
        </h2>

      {/* Content Section */}
      <div className="flex-1 overflow-auto px-10 py-6">
        <p className="mb-6 text-axio-black-light text-lg">
          Consultez l'historique de vos optimisations passées, incluant les détails de chaque trajet optimisé.
        </p>

        {/* List of Trips */}
        {trips.length > 0 ? (
          trips.map((trip, index) => (
            <div
              key={index}
              className="bg-axio-white p-6 rounded-2xl shadow-xl mb-6 flex justify-between items-center border border-axio-light-blue"
            >
              {/* Left Section - Trip Details */}
              <div className="text-axio-black flex-1">
                <p className="text-lg font-semibold">
                  <strong>ID Trip:</strong> {trip.id}
                </p>
                <p className="text-base"><strong>Date d'optimisation:</strong> {trip.date}</p>
                <p className="text-base"><strong>Nombre de destinations:</strong> {trip.destinations} points de livraison</p>
                <p className="text-base"><strong>Type de chargement:</strong> {trip.loadingType}</p>
                <p className="text-base"><strong>Durée estimée du trajet:</strong> {trip.duration}</p>
              </div>

              {/* Divider */}
              <div className="w-px bg-axio-light-blue h-24 mx-6"></div>

              {/* Right Section - Optimization Status */}
              <div className="text-center">
                <p className="text-lg">
                  <strong>Optimisation route:</strong>{" "}
                  {trip.routeOptimized ? (
                    <FaCheckCircle className="text-axio-green inline ml-1" />
                  ) : (
                    <span className="text-axio-red">❌</span>
                  )}
                </p>
                <p className="text-lg">
                  <strong>Optimisation chargement:</strong>{" "}
                  {trip.loadingOptimized === null ? (
                    "-"
                  ) : trip.loadingOptimized ? (
                    <FaCheckCircle className="text-axio-green inline ml-1" />
                  ) : (
                    <span className="text-axio-red">❌</span>
                  )}
                </p>

                <button className="mt-4 flex items-center bg-axio-sky-blue text-axio-white px-5 py-2.5 rounded-lg shadow hover:bg-axio-mid-blue transition">
                  <FaInfoCircle className="mr-2" /> Voir les détails
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-axio-black-light text-lg">Aucune optimisation trouvée.</p>
        )}
      </div>
    </div>
  );
};

export default Historique
