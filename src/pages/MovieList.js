import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
export const MovieList = ({ api }) => {
  const { data: movies } = useFetch(api);

  return (
    <main className="max-w-7xl py-7">
      <section className="flex justify-center flex-wrap">
        {movies.map((movies) => (
          <MovieCard key={movies.id} movie={movies} />
        ))}
      </section>
    </main>
  );
};
