import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import Spinner from "react-bootstrap/Spinner";
import "../../assets/styles/ag-grid-theme-builder-factors-table.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function FactorsTable({ query }) {
  let apiURL = `https://d2h6rsg43otiqk.cloudfront.net/prod/factors/${query.year}`;

  const params = new URLSearchParams();

  if (!query.year) {
    return (
      <p className="mt-4 fs-4 text-center error-text">You must enter a year</p>
    );
  }

  if (query.limit) {
    params.append("limit", query.limit);
  }
  if (query.country) {
    params.append("country", query.country);
  }
  if (params.toString()) {
    apiURL += `?${params.toString()}`;
  }

  const {
    data: rowData = [],
    fetchPending,
    error,
    setHeaders,
  } = useFetch(apiURL);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (apiURL) {
      setHeaders({
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
        Authorization: `Bearer ${token}`,
      });
    }
  }, [setHeaders, apiURL, token]);

  if (fetchPending) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-text">
        Error: {error.message || "Something went wrong!"}
      </div>
    );
  }

  const colDefs = [
    {
      field: "rank",
      headerName: "👆 Rank",
      flex: 1,
    },
    {
      field: "country",
      headerName: "🌎 Country",
      flex: 1,
    },
    { field: "score", headerName: "📈 Score", flex: 1 },
    { field: "economy", headerName: "Economy", flex: 1 },
    { field: "family", headerName: "Family", flex: 1 },
    { field: "health", headerName: "Health", flex: 1 },
    { field: "freedom", headerName: "Freedom", flex: 1 },
    { field: "generosity", headerName: "Generosity", flex: 1 },
    { field: "trust", headerName: "Trust", flex: 1 },
  ];

  return (
    <div
      id="MyGrid"
      className="ag-theme-custom"
      style={{ height: "600px", width: "100%" }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

export default FactorsTable;
