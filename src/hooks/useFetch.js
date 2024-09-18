import { useState, useEffect, useRef } from "react";

function useFetch(url) {
  const cache = useRef({});
  const [data, setData] = useState([]);
  const [fetchPending, setFetchPending] = useState(false);
  const [error, setError] = useState(null);
  const [headers, setHeaders] = useState({});

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setFetchPending(true);
      try {
        if (cache.current[url]) {
          setData(cache.current[url]);
          setFetchPending(false);
          return;
        }
        // const response = requiresAuth
        //   ? await fetchWithAuth(url, { headers }) // REMOVED SIGNAL (ABORTCONTROLLER) FOR NOW _ CONSIDER PLACING BACK
        //   : await fetch(url, { headers }); // REMOVED SIGNAL FOR NOW

        const response = await fetch(url, { headers, signal });

        if (!response.ok) {
          console.error(`Fetch failed: Status ${response.status}`);
          throw new Error(`Network error: ${response.status}`);
        }

        const fetchedData = await response.json();
        cache.current[url] = fetchedData;
        setData(fetchedData);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(`${error} Could not fetch data`);
        }
      } finally {
        setTimeout(() => (setFetchPending(false), 500));
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, headers]);

  return { data, fetchPending, error, setHeaders };
}

export default useFetch;
