import { Test } from "../components/Test";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ api, title }) => {
  useTitle(title);
  return (
    <main className="max-w-7xl py-7 dark:bg-gray-900 ">
      <section className="flex justify-center flex-wrap">
        <Footer />
      </section>
    </main>
  );
};
