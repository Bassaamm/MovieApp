import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ api }) => {
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q");
  const { data: movies } = useFetch(api, querySearch);
  useTitle(querySearch);
  return (
    <main className="max-w-7xl py-7">
      <p className="text-3xl pl-3 dark:text-white mb-8 text-gray-900">
        {movies.length === 0
          ? "No movies found"
          : `Result of the Search  ' ${querySearch} ' `}
      </p>
      <section className="flex justify-center flex-wrap">
        {movies.map((movies) => (
          <MovieCard key={movies.id} movie={movies} />
        ))}
      </section>
    </main>
  );
};
