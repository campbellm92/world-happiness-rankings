import { useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import useFetch from "../../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";

const API_KEY = import.meta.env.VITE_API_KEY;

function TrendChart({ query }) {
  const { data, fetchPending, error, setHeaders } = useFetch(
    query.country
      ? `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?country=${query.country}`
      : null
  );

  useEffect(() => {
    if (query.country) {
      setHeaders({
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      });
    }
  }, [setHeaders, query.country]);

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

  if (!data || data.length === 0) {
    return (
      <p className="mt-4 text-danger text-center">
        Sorry, we couldn't find any data for this country 😔. Please try a
        different one.
      </p>
    );
  }

  const reversedDataArr = data.slice().reverse();

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={reversedDataArr}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCountry" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#759c9e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#759c9e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="year" />
          <YAxis domain={[0, 10]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="score"
            data={reversedDataArr}
            stroke="#333333"
            fillOpacity={1}
            fill="url(#colorCountry)"
            name={query.country}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrendChart;
