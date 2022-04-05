import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function TripList() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/todos");
  const { data: trips, pending, error } = useFetch(url);

  // const usefetch = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setTrips(json);
  // }, [url]);

  // useEffect(() => {
  //   usefetch();

  //   // fetch(url)
  //   //   .then((response) => response.json())
  //   //   .then((json) => setTrips(json));
  // }, [usefetch]);
  // console.log(trips);

  return (
    <div className="trip_list">
      <h2>TripList</h2>
      {pending && <div>Lodading Trips...</div>}
      {error && <div>{error}</div>}
      <ul>
        {trips &&
          trips.map((trip) => {
            return (
              <li key={trip.id}>
                <h3>{trip.title}</h3>
                <p>{trip.userId}</p>
              </li>
            );
          })}
      </ul>
      <div className="filters">
        <button
          onClick={() =>
            setUrl("https://jsonplaceholder.typicode.com/todos?completed=true")
          }
        >
          Completed
        </button>
        <button
          onClick={() => setUrl("https://jsonplaceholder.typicode.com/todos")}
        >
          Not Compleated
        </button>
      </div>
    </div>
  );
}
