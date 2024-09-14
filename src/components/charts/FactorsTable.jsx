import useFetch from "../../hooks/useFetch";
// import { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import Spinner from "react-bootstrap/Spinner";
import "../../assets/styles/ag-grid-theme-builder.css";

function FactorsTable({ query }) {
  let apiURL = `https://d2h6rsg43otiqk.cloudfront.net/prod/factors/${query.year}`;

  const params = new URLSearchParams();

  if (query.limit) {
    params.append("limit", query.limit);
  }
  if (query.country) {
    params.append("country", query.country);
  }
  if (params.toString()) {
    apiURL += `?${params.toString()}`;
  }

  const { data: rowData = [], fetchPending, error } = useFetch(apiURL);

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
    return <div>Error: {error.message || "Something went wrong!"}</div>;
  }

  const colDefs = [
    { field: "rank", headerName: "👆 Rank" },
    { field: "country", headerName: "🌎 Country" },
    { field: "score", headerName: "📈 Score" },
    { field: "economy", headerName: "Economy" },
    { field: "family", headerName: "Family" },
    { field: "health", headerName: "Health" },
    { field: "freedom", headerName: "Freedom" },
    { field: "generosity", headerName: "Generosity" },
    { field: "trust", headerName: "Trust" },
  ];

  return (
    <div
      id="MyGrid"
      className="ag-theme-custom"
      style={{ height: "100%", width: "100%" }}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

export default FactorsTable;
