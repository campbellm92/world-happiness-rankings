import useFetch from "../../hooks/useFetch";
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

const API_KEY = import.meta.env.VITE_API_KEY;

function TrendChart({ query }) {
  const { data, fetchPending, error, setHeaders } = useFetch(
    query.year && query.country
      ? `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?year=${query.year}&country=${query.country}`
      : null
  );

  useEffect(() => {
    if (query.year && query.country) {
      setHeaders({
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      });
    }
  }, [setHeaders, query.year, query.country]);

  if (fetchPending) {
    console.log("loading");
  }

  if (error) {
    console.log(error);
  }

  return (
    <ResponsiveContainer>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default TrendChart;
