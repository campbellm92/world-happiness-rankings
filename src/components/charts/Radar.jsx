import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Spinner from "react-bootstrap/Spinner";

function FactorsRadar({ query }) {
  const { data, fetchPending, error } = useFetch(
    query.country && query.year
      ? `https://d2h6rsg43otiqk.cloudfront.net/prod/factors/${query.year}?country=${query.country}`
      : null,
    true
  );

  // useEffect(() => {
  //   if (query.country && query.year) {
  //     setHeaders({
  //       "Content-Type": "application/json",
  //     });
  //   }
  // }, [setHeaders, query.country, query.year]);

  useEffect(() => {
    console.log("Query:", query); // Optional logging for debugging
  }, [query]);

  if (fetchPending) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message || "Something went wrong!"}</div>;
  }

  if (!data || data.length === 0 || !data[0]) {
    return (
      <p className="mt-4 text-danger text-center">
        Sorry, we couldn't find any data for this country 😔. Please try a
        different one.
      </p>
    );
  }

  const radarData = [
    { factor: "Economy", value: parseFloat(data[0]?.economy) },
    { factor: "Family", value: parseFloat(data[0]?.family) },
    { factor: "Health", value: parseFloat(data[0]?.health) },
    { factor: "Freedom", value: parseFloat(data[0]?.freedom) },
    { factor: "Generosity", value: parseFloat(data[0]?.generosity) },
    { factor: "Trust", value: parseFloat(data[0]?.trust) },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={90} data={radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="factor" />
        <PolarRadiusAxis angle={30} domain={[0, 3]} />
        <Radar
          name={query.country}
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default FactorsRadar;
