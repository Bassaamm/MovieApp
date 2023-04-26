import { useState, useEffect } from "react";

export const useFetch = (api, querySearch = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${querySearch}`;
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
