import React, { useState } from "react";
import Title from "../shared/Title";
import { formatTripValue, formatTripDate } from "../../utils/formatDate";

const tripsData = [
  {
    trip_id: 1,
    contract_id: 101,
    truck_id: 201,
    predefined_start_date: "2023-10-01T08:00:00Z",
    predefined_end_date: "2023-10-01T10:00:00Z",
    actual_start_date: "2023-10-01T08:05:00Z",
    productLoadPlans: [],
    route_plans: [
      {
        route_plan_id: 1,
        trip_id: 1,
        truck_id: 201,
        locations: [
          {
            location_id: 1,
            route_plan_id: 1,
            unloadingTime: 10,
            name: "Alger",
            longitude: 3.0588,
            latitude: 36.7538,
          },
          {
            location_id: 2,
            route_plan_id: 1,
            unloadingTime: 5,
            name: "Setif",
            longitude: 5.404,
            latitude: 36.1911,
          },
          {
            location_id: 3,
            route_plan_id: 1,
            unloadingTime: 7,
            name: "Oran",
            longitude: -0.5812,
            latitude: 35.6971,
          },
        ],
      },
    ],
    contract: { contract_id: 101, name: "Contract A" },
    truck: { truck_id: 201, plate: "ABC123" },
  },
  {
    trip_id: 2,
    contract_id: 102,
    truck_id: 202,
    predefined_start_date: "2023-10-02T09:00:00Z",
    predefined_end_date: "2023-10-02T12:00:00Z",
    actual_start_date: "2023-10-02T09:15:00Z",
    productLoadPlans: [],
    route_plans: [], // No route plans added for trip 2 for now
    contract: { contract_id: 102, name: "Contract B" },
    truck: { truck_id: 202, plate: "XYZ789" },
  },
  {
    trip_id: 3,
    contract_id: 103,
    truck_id: 203,
    predefined_start_date: "2023-10-03T07:00:00Z",
    predefined_end_date: "2023-10-03T11:00:00Z",
    actual_start_date: "2023-10-03T07:10:00Z",
    productLoadPlans: [],
    route_plans: [], // No route plans added for trip 3 for now
    contract: { contract_id: 103, name: "Contract C" },
    truck: { truck_id: 203, plate: "LMN456" },
  },
];

const OptimizationPage01 = () => {
  const [selectedTrip, setSelectedTrip] = useState("");

  const handleChange = (event) => {
    setSelectedTrip(event.target.value);
  };

  // Extract the trip id from the selected value.
  // Since the option's value is set to the trip id, this parseInt is sufficient.
  const selectedTripId = selectedTrip ? parseInt(selectedTrip, 10) : null;

  // Find the selected trip in the data set
  const selectedTripObject = tripsData.find(
    (trip) => trip.trip_id === selectedTripId
  );

  return (
    <div className="space-y-10">
      {/* Title */}
      <Title
        title="Optimisation des itinéraires"
        desc="Optimisez vos itinéraires en sélectionnant un trajet et obtenez l’ordre optimal des destinations en un clic."
      />

      <div className="w-full flex justify-center">
        <img
          src="/public/acceuil/illustration.svg"
          className="w-80 aspect-auto"
          alt="Illustration"
        />
      </div>

      {/* Select trip */}
      <div className="w-full flex justify-center">
        <select
          value={selectedTrip}
          onChange={handleChange}
          className="outline-none border-2 border-gray-500 rounded-lg px-6 py-6 text-axio-gray-500 w-1/2"
        >
          <option value="" disabled className="text-axio-dark-blue text-lg">
            Sélectionnez une trip à optimiser
          </option>
          {tripsData.map((trip, index) => {
            return (
              <option
                value={trip.trip_id}
                key={index}
                className="text-axio-dark-blue  mx-2 text-lg font-medium"
              >
                {formatTripValue(trip)}
              </option>
            );
          })}
        </select>
      </div>

      {selectedTrip !== "" && selectedTripObject && (
        <div className="w-full flex flex-row gap-12 basis-1/2">
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-axio-dark-blue text-lg capitalize font-medium">
              Date de depart
            </p>
            <div className="flex flex-row gap-5 items-center px-8 py-4 border border-gray-400 rounded-xl">
              <img src="/public/acceuil/calendar.svg" alt="Calendar" />
              <p className="text-axio-dark-blue text-lg capitalize font-medium">
                {formatTripDate(selectedTripObject)}
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-axio-dark-blue text-lg capitalize font-medium">
              Liste des destinations
            </p>
            <div className="flex flex-row gap-5 items-center px-8 py-4 border border-gray-400 rounded-xl">
              {selectedTripObject.route_plans.length > 0 ? (
                <ul className="list-disc ml-4 text-lg font-medium text-axio-dark-blue">
                  {selectedTripObject.route_plans[0].locations.map(
                    (location, index) => (
                      <li key={location.location_id}>
                        {index + 1} - {location.name}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                <p className="text-gray-500">No locations available</p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        <button
          disabled={
            !selectedTripObject || selectedTripObject.route_plans.length === 0
          }
          className="w-full flex justify-center gap-4 items-center px-8 py-4 bg-axio-blue/90 hover:bg-axio-blue rounded-2xl transition-all duration-200 max-w-[400px]"
        >
          <p className="font-bold text-axio-white">
            Lancer l’algorithme d’optimisation
          </p>
        </button>
      </div>
    </div>
  );
};

export default OptimizationPage01;
