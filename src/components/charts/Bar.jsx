import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function FactorsBarChart({ query, token }) {
  const { data, fetchPending, error } = useFetch(
    query.country && query.year
      ? `https://d2h6rsg43otiqk.cloudfront.net/prod/factors/${query.year}?country=${query.country}`
      : null,
    true
  );

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    console.log("API Key:", API_KEY);
    console.log("Authorization Token:", token);
  }, [API_KEY, token]);

  useEffect(() => {
    console.log("Fetched data:", data);
  }, [data]);

  return (
    <ResponsiveContainer>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default FactorsBarChart;
