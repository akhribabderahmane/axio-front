import React, { useState } from "react";

const OptimizationPage = ({ onOptimize }) => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="min-h-screen p-10 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-axio-dark-blue">Optimisation du chargement</h2>
      <p className="text-lg text-axio-black mt-2 text-center">
        Optimise l’espace du camion selon le volume, le poids et les priorités. 🚛📦
      </p>

      {/* Route Selection */}
      <div className="flex space-x-8 mt-8">
        <div
          className={`p-8 rounded-xl cursor-pointer border-2 shadow-lg transition-all 
          ${selectedRoute === "par défaut" ? "border-axio-blue bg-axio-mid-blue text-axio-white" : "border-gray-300 bg-axio-white"}`}
          onClick={() => handleSelectRoute("par défaut")}
        >
          <h3 className="text-xl font-semibold">Route par défaut</h3>
          <p className="text-sm">Suit l’ordre initial des destinations.</p>
        </div>

        <div
          className={`p-8 rounded-xl cursor-pointer border-2 shadow-lg transition-all 
          ${selectedRoute === "optimisée" ? "border-axio-blue bg-axio-mid-blue text-axio-white" : "border-gray-300 bg-axio-white"}`}
          onClick={() => handleSelectRoute("optimisée")}
        >
          <h3 className="text-xl font-semibold">Route optimisée</h3>
          <p className="text-sm">Optimise l’itinéraire en respectant LIFO.</p>
        </div>
      </div>

      {/* Launch Optimization */}
      <button
        onClick={() => selectedRoute && onOptimize(selectedRoute)}
        className={`mt-10 px-8 py-4 text-lg font-semibold rounded-lg shadow-md transition-all
          ${selectedRoute ? "bg-axio-sky-blue text-axio-white hover:bg-axio-blue" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
        disabled={!selectedRoute}
      >
        Lancer l’algorithme d’optimisation
      </button>
    </div>
  );
};

export default OptimizationPage;


// import React, { useState } from "react";

// const OptimizationPage = () => {
//   const [selectedRoute, setSelectedRoute] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSelectRoute = (route) => {
//     setSelectedRoute(route);
//   };

//   const handleOptimize = async () => {
//     if (!selectedRoute) {
//       alert("Veuillez sélectionner une route !");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("https://your-backend-api.com/optimize", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ routeType: selectedRoute }),
//       });
//       const data = await response.json();
//       setResult(data);
//     } catch (error) {
//       console.error("Erreur lors de l'optimisation :", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (result) {
//     return <OptimizationResult data={result} />;
//   }

//   return (
//     <div className="min-h-screen bg-axio-light-blue p-8">
//       <h2 className="text-2xl font-semibold text-axio-dark-blue">Optimisation du chargement</h2>
//       <p className="text-gray-600">Optimise l’espace du camion selon le volume, le poids et les priorités pour une livraison efficace. 🚛📦</p>

//       {/* Route Selection */}
//       <div className="flex space-x-6 mt-6">
//         <div
//           className={`p-6 rounded-xl cursor-pointer border ${
//             selectedRoute === "par défaut" ? "border-axio-blue bg-axio-mid-blue" : "border-gray-300 bg-white"
//           }`}
//           onClick={() => handleSelectRoute("par défaut")}
//         >
//           <h3 className="text-xl font-semibold text-axio-dark-blue">Route par défaut</h3>
//           <p className="text-gray-600">Suit l’ordre initial des destinations.</p>
//         </div>

//         <div
//           className={`p-6 rounded-xl cursor-pointer border ${
//             selectedRoute === "optimisée" ? "border-axio-blue bg-axio-mid-blue" : "border-gray-300 bg-white"
//           }`}
//           onClick={() => handleSelectRoute("optimisée")}
//         >
//           <h3 className="text-xl font-semibold text-axio-dark-blue">Route optimisée</h3>
//           <p className="text-gray-600">Optimise l’itinéraire en respectant LIFO.</p>
//         </div>
//       </div>

//       {/* Launch Optimization */}
//       <button
//         onClick={handleOptimize}
//         className="mt-6 px-6 py-3 bg-axio-blue text-white rounded-lg shadow-md hover:bg-axio-dark-blue transition"
//         disabled={loading}
//       >
//         {loading ? "Optimisation en cours..." : "Lancer l’algorithme d’optimisation"}
//       </button>
//     </div>
//   );
// };

// const OptimizationResult = ({ data }) => {
//   return (
//     <div className="min-h-screen p-8 bg-axio-light-blue">
//       <h2 className="text-2xl font-semibold text-axio-dark-blue">Optimisation du chargement</h2>
//       <p className="text-gray-600">Résultats obtenus avec la méthode {data.routeType}.</p>

//       <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
//         <h3 className="text-xl font-semibold">Ordre des stations</h3>
//         <p className="text-gray-700">{data.routeOrder.join(" ➝ ")}</p>
//       </div>

//       <div className="flex space-x-4 mt-4">
//         <p className="px-4 py-2 bg-axio-dark-blue text-white rounded-md">Véhicule : {data.vehicleID}</p>
//         <p className="px-4 py-2 bg-axio-blue text-white rounded-md">Capacité : {data.capacity}</p>
//         <p className="px-4 py-2 bg-axio-green text-white rounded-md">Taux de remplissage : {data.fillRate}%</p>
//       </div>

//       {/* Export Button */}
//       <button className="mt-6 px-6 py-3 bg-axio-sky-blue text-white rounded-lg shadow-md hover:bg-axio-blue transition">
//         Exporter
//       </button>
//     </div>
//   );
// };

// export default OptimizationPage;
