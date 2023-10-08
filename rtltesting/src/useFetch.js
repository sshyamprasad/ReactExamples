import { useState, useEffect } from "react";

function useFetch(query) {
  const BASE_URL = "https://countries.trevorblades.com/graphql";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  };
  useEffect(() => {
    fetch(BASE_URL, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.error(error));
  }, [query]);
  return { data, loading, error };
}
export default useFetch;
