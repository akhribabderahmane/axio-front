import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

// Modal Component
const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-axio-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-axio-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-axio-dark-blue">{title}</h2>
        <p className="text-axio-black-light">{content}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-axio-blue text-axio-white rounded-lg hover:bg-axio-mid-blue"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

const DemandList = () => {
  // Dummy data inside the component
  const demands = [
    {
      productInfo: "10 palettes de produits pharmaceutiques",
      departureDate: "12 Février 2025",
      location: "Paris, France",
      destinations: "Lyon, Marseille, Bordeaux",
      merchandiseType: "Produits pharmaceutiques",
    },
    {
      productInfo: "25 tonnes de ciment en sacs",
      departureDate: "15 Février 2025",
      location: "Lille, France",
      destinations: "Nantes, Toulouse",
      merchandiseType: "Matériaux de construction",
    },
    {
      productInfo: "8 palettes de composants électroniques",
      departureDate: "18 Février 2025",
      location: "Berlin, Allemagne",
      destinations: "Munich, Hambourg",
      merchandiseType: "Électronique",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col bg-axio-white min-h-screen px-16 py-8">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-semibold text-axio-dark-blue">Liste des Demandes</h2>
      </div>

      {/* Subtitle */}
      <p className="mb-8 text-axio-black-light text-lg">
        Visualisez les demandes de transport en attente et leurs détails.
      </p>

      {/* List of Demands */}
      {demands.length > 0 ? (
        demands.map((demand, index) => {
          return (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-xl mb-6 flex justify-between items-center border `}
            >
              {/* Left Section - Demand Details */}
              <div className="text-axio-black flex-1 space-y-2">
                <p className="text-lg font-semibold">
                  Info produit: {" "}
                  <button
                    onClick={() => openModal("Détails du Produit", demand.productInfo)}
                    className="text-axio-sky-blue hover:underline"
                  >
                    Voir détails
                  </button>
                </p>
                <p className="text-base">
                  <strong>Date et lieu de départ:</strong> {demand.departureDate} à {demand.location}
                </p>
                <p className="text-base">
                  <strong>Destinations: </strong>
                  <button
                    onClick={() => openModal("Détails des Destinations", demand.destinations)}
                    className="text-axio-orange hover:underline"
                  >
                    Voir détails
                  </button>
                </p>
                <p className="text-base">
                  <strong>Type de marchandise:</strong> {demand.merchandiseType}
                </p>
              </div>

              {/* Right Section - Details Button */}
              <button className="flex items-center bg-axio-blue text-axio-white px-6 py-3 ml-2 rounded-lg shadow-md hover:bg-axio-mid-blue transition">
                <FaInfoCircle className="mr-2" /> Voir les détails
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-center text-axio-black-light text-lg">Aucune demande trouvée.</p>
      )}

      {/* Modal Component */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle} content={modalContent} />
    </div>
  );
};

export default DemandList;
