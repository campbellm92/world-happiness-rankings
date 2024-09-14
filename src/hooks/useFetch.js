import { useState, useEffect, useRef } from "react";
// import fetchWithAuth from "../utils/fetchWithAuth";

function useFetch(url) {
  // const cache = useRef({});
  const [data, setData] = useState([]);
  const [fetchPending, setFetchPending] = useState(false);
  const [error, setError] = useState(null);
  const [headers, setHeaders] = useState({});

  useEffect(() => {
    if (!url) return;

    console.log("Fetching data from URL:", url); // Add this
    // console.log("Headers being sent:", headers);
    // const controller = new AbortController();
    // const { signal } = controller;

    const fetchData = async () => {
      setFetchPending(true);
      try {
        // if (cache.current[url]) {
        //   setData(cache.current[url]);
        //   setFetchPending(false);
        //   return;
        // }

        // const response = requiresAuth
        //   ? await fetchWithAuth(url, { headers }) // REMOVED SIGNAL (ABORTCONTROLLER) FOR NOW _ CONSIDER PLACING BACK
        //   : await fetch(url, { headers }); // REMOVED SIGNAL FOR NOW

        const response = await fetch(url, { headers });

        if (!response.ok) {
          console.error(`Fetch failed: Status ${response.status}`);
          const errorData = await response.json().catch(() => null);
          console.error("Response data:", errorData);
          throw new Error(`Network error: ${response.status}`);
        }

        const fetchedData = await response.json();
        // cache.current[url] = fetchedData;
        setData(fetchedData);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(`${error} Could not fetch data`);
        }
      } finally {
        setFetchPending(false);
      }
    };

    fetchData();

    // return () => {
    //   controller.abort();
    // };
  }, [url, headers]);

  return { data, fetchPending, error, setHeaders };
}

export default useFetch;
