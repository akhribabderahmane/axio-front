import React from 'react';
import Historique from './Historique';

const Charge02 = () => {
  const trips = [
    { id: "X456B", date: "07/02/2025", destinations: 5, loadingType: "LIFO", duration: "3h 45min", routeOptimized: true, loadingOptimized: null },
    { id: "X123A", date: "06/02/2025", destinations: 3, loadingType: "FIFO", duration: "2h 15min", routeOptimized: false, loadingOptimized: true },
  ];

  return (
    <div className="p-6">
      <Historique trips={trips} />
    </div>
  );
};

export default Charge02;
