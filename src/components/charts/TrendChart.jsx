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
  const { country1 = "", country2 = "", country3 = "" } = query;
  if (!country1 && !country2 && !country3) {
    return <p>Please select at least one country to display the data.</p>;
  }

  const {
    data: data1,
    fetchPending: fetchPending1,
    error: error1,
    setHeaders: setHeaders1,
  } = useFetch(
    query.country1
      ? `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?country=${query.country1}`
      : null
  );

  const {
    data: data2,
    fetchPending: fetchPending2,
    error: error2,
    setHeaders: setHeaders2,
  } = useFetch(
    query.country2
      ? `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?country=${query.country2}`
      : null
  );

  const {
    data: data3,
    fetchPending: fetchPending3,
    error: error3,
    setHeaders: setHeaders3,
  } = useFetch(
    query.country3
      ? `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?country=${query.country3}`
      : null
  );

  useEffect(() => {
    if (query.country1) {
      setHeaders1({
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      });
    }
    if (query.country2) {
      setHeaders2({
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      });
    }
    if (query.country3) {
      setHeaders3({
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      });
    }
  }, [
    setHeaders1,
    setHeaders2,
    setHeaders3,
    query.country1,
    query.country2,
    query.country3,
  ]);

  if (fetchPending1 || fetchPending2 || fetchPending3) {
    return <Spinner animation="grow" variant="success" />;
  }

  if (error1 || error2 || error3) {
    return (
      <div>
        Error:{" "}
        {error1.message ||
          error2.message ||
          error3.message ||
          "Something went wrong!"}
      </div>
    );
  }

  const combinedData = [].concat(data1 || [], data2 || [], data3 || []);

  if (combinedData.length === 0) {
    return <p>No data available.</p>;
  }

  const country1Data = combinedData.filter((i) => i.country === query.country1);
  const country2Data = combinedData.filter((i) => i.country === query.country2);
  const country3Data = combinedData.filter((i) => i.country === query.country3);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={combinedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorCountry1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#759c9e" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#759c9e" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorCountry2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fce8c5" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fce8c5" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorCountry3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#28a745" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#28a745" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="score"
          data={country1Data}
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorCountry1)"
          name={query.country1}
        />
        <Area
          type="monotone"
          dataKey="score"
          data={country2Data}
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorCountry2)"
          name={query.country2}
        />
        <Area
          type="monotone"
          dataKey="score"
          data={country3Data}
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorCountry3)"
          name={query.country3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default TrendChart;
