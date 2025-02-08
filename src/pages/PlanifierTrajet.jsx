import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import pic from "../assets/PlanifierTrajet.png"
const Planifier = () => {
    const navigate = useNavigate();
    const [selectedDemande, setSelectedDemande] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const demandes = [
      { id: 1, name: "Demande A", details: "Livraison Alger → Oran" },
      { id: 2, name: "Demande B", details: "Livraison Constantine → Annaba" },
      { id: 3, name: "Demande C", details: "Livraison Béjaïa → Sétif" },
    ];


    const handleOptimize = async () => {
      if (!selectedDemande) {
        alert("Veuillez sélectionner une demande !");
        return;
      }
  
      setLoading(true);
      try {
        const response = await fetch("https://backend-url/optimize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ demandeId: selectedDemande.id }),
        });
        const data = await response.json();
        // navigate("/optimisation", { state: { optimizedData: data } });
      } catch (error) {
        console.error("Erreur lors de l'optimisation :", error);
        alert("Échec de l'optimisation. Réessayez.");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="p-10 min-h-screen bg-axio-white flex flex-col items-center">
        <div className="w-full max-w-xl">
          <button onClick={() => navigate(-1)} className="text-axio-dark-blue mb-4">
            ← Retour
          </button>
          <h1 className="text-2xl font-bold text-axio-dark-blue">
            Faire une planification optimisée d’un trajet
          </h1>
          <p className="text-gray-600 mt-2">
            Faites correspondre efficacement les demandes aux transporteurs pour minimiser les coûts et maximiser l’efficacité.
          </p>
        </div>
  
        <div className="mt-6 max-w-md">
          <img src={pic} alt="Illustration" className="w-64 h-64 rounded-lg object-cover" />
        </div>
  
        <div className="mt-6 w-full max-w-md">
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-axio-light-blue text-axio-black"
            onChange={(e) => setSelectedDemande(demandes.find(d => d.id === parseInt(e.target.value)))}
          >
            <option value="">Sélectionnez une demande</option>
            {demandes.map((demande) => (
              <option key={demande.id} value={demande.id}>{demande.details}</option>
            ))}
          </select>
        </div>
  
        <Link
        to="/planifier/resultat" 
         className="mt-8 px-6 py-3 bg-axio-blue text-white text-lg font-semibold rounded-lg hover:bg-axio-sky-blue transition"
        >
          <button
          className="bg-axio-blue text-white text-lg font-semibold rounded-lg hover:bg-axio-sky-blue transition"
        >Optimisé</button>
        </Link>
      </div>
    );
};

export default Planifier;
