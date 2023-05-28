import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ api, title }) => {
  const { data: movies } = useFetch(api);
  useTitle(title);
  return (
    <main className="max-w-7xl py-7">
      <section className="flex justify-center flex-wrap">
        {movies
          .map((movies) => <MovieCard key={movies.id} movie={movies} />)
          .slice(1, -1)}
      </section>
    </main>
  );
};
