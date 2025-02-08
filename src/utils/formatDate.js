const formatTripValue = (trip) => {
    const date = new Date(trip.predefined_start_date);
    const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  
    // Get parts of the date using UTC methods since the date is provided in UTC format.
    const weekday = weekdays[date.getUTCDay()];
    const day = date.getUTCDate().toString().padStart(2, "0"); // Ensures a two-digit day
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
  
    // Return the value in the format: trip_id-weekday,day,month,year
    return `${trip.trip_id} -  ${day} ${weekday} ${month},${year}`;
  };

  const formatTripDate = (trip) => {
    const date = new Date(trip.predefined_start_date);
    const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  
    // Get parts of the date using UTC methods since the date is provided in UTC format.
    const weekday = weekdays[date.getUTCDay()];
    const day = date.getUTCDate().toString().padStart(2, "0"); // Ensures a two-digit day
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
  
    // Return the value in the format: trip_id-weekday,day,month,year
    return ` ${day} ${weekday} ${month},${year}`;
  };


  export   {formatTripValue,formatTripDate};