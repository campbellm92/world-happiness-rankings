import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function useValidateSearch(country, year, limit) {
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const countriesURL = "https://d2h6rsg43otiqk.cloudfront.net/prod/countries";

  const {
    data: countriesData = [],
    error: countriesError,
    setHeaders: setCountriesHeaders,
  } = useFetch(countriesURL);

  useEffect(() => {
    setCountriesHeaders({
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    });
  }, [setCountriesHeaders]);

  const validateInputs = () => {
    setError("");

    if (year < 2015 || year > 2020) {
      setError("Please enter a year between 2015 and 2020.");
      return false;
    }

    if (limit < 1 || limit > 160) {
      setError("Please enter a results limit between 1 and 160");
      return false;
    }

    if (!countriesData || countriesData.length === 0) {
      setError("Countries list is still loading. Please wait...");
      return false;
    }

    if (
      country.trim() !== "" &&
      !countriesData
        .map((c) => c.toLowerCase())
        .includes(country.trim().toLowerCase())
    ) {
      setError("Please enter a valid country name.");
      return false;
    }

    if (countriesError) {
      setError("Failed to load countries. Please try again later.");
      return false;
    }

    setError("");
    return true;
  };

  return { validateInputs, error, countriesError };
}

export default useValidateSearch;
