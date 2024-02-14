import { useMovieList } from "./useMovieList";

export default function MoviesList({ api }: { api: string; title: string }) {
  const { data, isLoading, error } = useMovieList(api);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error;
  console.log(data.results, "data");
  return (
    <div>
      {data.results.map((e: any) => (
        <p key={e.poster_path}>{e.adult.toString()}</p>
      ))}
    </div>
  );
}
