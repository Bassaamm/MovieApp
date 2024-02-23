import { useParams } from "react-router-dom";
import { useMovieInfo } from "./useMovieInfo";

export default function MoviesInfo() {
  const params = useParams();
  console.log(params);
  const { data, isLoading } = useMovieInfo(params.id!);
  if (isLoading) return "Loading...";
  return <div>{data.id}</div>;
}
