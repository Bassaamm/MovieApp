import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("GET OUT !!");
  return (
    <main className="flex justify-center items-center  ">
      <section className="flex justify-center items-center flex-col gap-y-10 ">
        <p className=" dark:text-white text-3xl font-bold text-gray-900">
          Nothing here might intreset you :)
        </p>
        <Link
          to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          className="font-semibold text-white bg-gray-900 px-6 py-3 rounded-2xl dark:"
        >
          Smash me
        </Link>
      </section>
    </main>
  );
};
