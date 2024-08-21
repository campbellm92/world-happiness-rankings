//import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  const city = "asti";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  const { data, fetchPending, error } = useFetch(url);

  if (fetchPending) return <p>Loading data...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div>
      <h1>Weather in {city}</h1>
      {data && (
        <div>
          <p>Temp: {data.main.temp}</p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Humidity {data.main.humidity}</p>
        </div>
      )}
    </div>
  );
}

export default App;
