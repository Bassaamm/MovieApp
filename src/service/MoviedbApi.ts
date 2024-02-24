import axios from "axios";

const API_KEY = `api_key=${import.meta.env.VITE_MOVIEDB_KEY}`;
const BASE_URL = `https://api.themoviedb.org/3`;

export async function fetchMovieData(endpoint: string, query?: string) {
  const url = `${BASE_URL}/${endpoint}?${API_KEY}${query ? `&query=${query}` : ""}`;
  const res = await axios.get(url);
  return res.data;
}
