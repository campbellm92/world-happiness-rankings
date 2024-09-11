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
          const data = cache.current[url];
          setData(data);
          setFetchPending(false);
        } else {
          const response = await fetch(url, {
            signal,
            headers: { ...headers },
          });
          if (!response.ok) throw new Error(response.statusText);
          const data = await response.json();
          cache.current[url] = data;
          setFetchPending(false);
          setData(data);
          setError(null);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(`${error} Could not fetch data`);
          setFetchPending(false);
        }
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
