import React, { useState } from "react";
import OptimisationPage02 from '../components/optimization_v2'
import OptimizationResult from '../components/optimization_v2/OptimizationPage'
const Optimization02 = () => {
  
  const [result, setResult] = useState(null);

  const handleOptimize = (routeType) => {
  const mockData = {
    routeType,
    routeOrder: ["Entrepôt principal", "Client A", "Point de livraison B", "Client C", "Retour au dépôt"],
    vehicleID: "IDX6778",
    capacity: 78005,
    fillRate: 79,
  };

  setResult(mockData);
};
  return result ? (
    <OptimizationResult data={result} onBack={() => setResult(null)} />
  ) : (
    <OptimisationPage02 onOptimize={handleOptimize} />
  );
}

export default Optimization02
