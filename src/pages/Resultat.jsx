import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OptimisationResult = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  // Transporters data
  const transporters = [
    { name: "Amor Mohamed", vehicle: "Camion", capacity: "10 tons", pricing: "Au poids" },
    { name: "TOBNI", vehicle: "Camion", capacity: "10 tons", pricing: "Au poids" },
    { name: "WALID", vehicle: "Camion", capacity: "10 tons", pricing: "Au poids" },
    { name: "AMINE", vehicle: "Camion", capacity: "10 tons", pricing: "Au poids" },
    { name: "AKHRIB", vehicle: "Camion", capacity: "10 tons", pricing: "Au poids" }
  ];

  const estimatedCost = "20 234 566 DZD";

  // Navigation functions
  const nextTransporter = () => {
    if (currentIndex < transporters.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTransporter = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to validate and send request
  const handleValidation = async () => {
    setIsSubmitting(true);
    
    setShowModal(true);
  }

  return (
    <div className="p-8 min-h-screen bg-axio-white flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-axio-dark-blue mb-6 self-start text-lg flex items-center gap-2 hover:text-axio-sky-blue transition"
      >
        ← <span className="font-semibold">Faire une planification optimisée d’un trajet</span>
      </button>

      {/* Subtitle */}
      <p className="text-gray-600 text-center max-w-2xl">
        Faites correspondre efficacement les demandes aux transporteurs pour minimiser les coûts et maximiser l'efficacité.
      </p>

      {/* Title */}
      <h2 className="text-xl font-semibold text-axio-dark-blue mt-6">
        Liste des transporteurs choisis :
      </h2>

      {/* Transporters Container */}
      <div className="flex items-center gap-4 mt-4">
        {/* Left Arrow */}
        <button onClick={prevTransporter} disabled={currentIndex === 0}>
          <ChevronLeft
            size={32}
            className={`text-axio-black-light ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:text-axio-blue"}`}
          />
        </button>

        {/* Transporters Cards */}
        <div className="flex gap-6">
          {transporters.slice(currentIndex, currentIndex + 2).map((t, index) => (
            <div
              key={index}
              className="border border-axio-black-light rounded-lg p-6 shadow-md bg-white w-80"
            >
              <p className="text-md font-semibold text-axio-black">
                <strong>Nom du transporteur:</strong> {t.name}
              </p>
              <p className="text-gray-700"><strong>Type de véhicule:</strong> {t.vehicle}</p>
              <p className="text-gray-700"><strong>Capacité maximale:</strong> {t.capacity}</p>
              <p className="text-gray-700"><strong>Tarification:</strong> {t.pricing}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={nextTransporter} disabled={currentIndex >= transporters.length - 2}>
          <ChevronRight
            size={32}
            className={`text-axio-black-light ${currentIndex >= transporters.length - 2 ? "opacity-50 cursor-not-allowed" : "hover:text-axio-blue"}`}
          />
        </button>
      </div>

      {/* Estimated Cost */}
      <div className="mt-8">
        <p className="text-lg font-semibold text-axio-black">Coût estimé :</p>
        <p className="bg-axio-green/20 text-axio-green font-bold px-6 py-3 rounded-lg text-xl">
          {estimatedCost}
        </p>
      </div>

      {/* Validation Button */}
      <button
        className="mt-8 px-8 py-4 bg-axio-mid-blue text-white text-lg font-semibold rounded-lg hover:bg-axio-sky-blue transition disabled:opacity-50"
        onClick={handleValidation}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Validation en cours..." : "Valider planification"}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h3 className="text-xl font-semibold text-axio-green">Validation réussie ! ✅</h3>
            <p className="text-gray-700 mt-4">Votre planification a été enregistrée avec succès.</p>
            <button
              className="mt-6 px-6 py-2 bg-axio-blue text-white font-semibold rounded-lg hover:bg-axio-sky-blue transition"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimisationResult;
