const API_KEY = import.meta.env.VITE_API_KEY;

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    "X-API-KEY": API_KEY,
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  console.log("Headers being sent:", headers);

  // const controller = new AbortController();
  // const { signal } = controller;

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      // signal,
    });

    if (!response.ok) {
      throw new Error("Network didn't respond.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(`Fetch error: ${error}`);
    }
    throw error;
  }
}
export default fetchWithAuth;
