import axios from "axios";
//&query=${querySearch}` for query
const API_KEY = "api_key=${process.env.REACT_APP_API_KEY}";
let api = "";
const url = `https://api.themoviedb.org/3/${api}?${API_KEY}`;

export async function getMovieList({ apiInfo }: { apiInfo: string }) {
  api = apiInfo;
  try {
    const respose = axios.get(url);
    return respose;
  } catch (e) {
    console.log(e);
  }
}
