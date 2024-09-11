import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import Spinner from "react-bootstrap/Spinner";
import "../../assets/styles/ag-grid-theme-builder.css";

const API_KEY = import.meta.env.VITE_API_KEY;

function Table({ query }) {
  let apiURL = null;

  if (query.year && query.country) {
    apiURL = `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?year=${query.year}&country=${query.country}`;
  } else if (query.year) {
    apiURL = `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?year=${query.year}`;
  } else if (query.country) {
    apiURL = `https://d2h6rsg43otiqk.cloudfront.net/prod/rankings?country=${query.country}`;
  }

  const {
    data: rowData = [],
    fetchPending,
    error,
    setHeaders,
  } = useFetch(apiURL);

  useEffect(() => {
    console.log("Row data:", rowData);
    if (apiURL) {
      setHeaders({
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      });
    }
  }, [setHeaders, apiURL]);

  if (fetchPending) {
    return <Spinner animation="grow" variant="success" />;
  }

  if (error) {
    return <div>Error: {error.message || "Something went wrong!"}</div>;
  }

  const colDefs = [
    { field: "rank", headerName: "👆 Rank" },
    { field: "country", headerName: "🌎 Country" },
    { field: "score", headerName: "📈 Score" },
    { field: "year", headerName: "🗓️ Year" },
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

export default Table;
