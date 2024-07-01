import { useState, useEffect } from "react";

export default function useFetch() {
  const [data, setData] = useState([]);

  const url = "http://localhost:8000/products";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.products);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    }
    fetchData();
  }, [url]);

  return { data };
}
