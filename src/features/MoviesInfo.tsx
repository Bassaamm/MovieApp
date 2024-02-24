import { useNavigate, useParams } from "react-router-dom";
import { useMovieInfo } from "./useMovieInfo";
import Header from "@/components/Header";
import { getMovieImage } from "@/utils/helpers";
import { CastEntity, Movie, Weather } from "@/types/MovieType";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useMovieCast } from "./useMovieCast";
import { useMovieRec } from "./useMovieRec";

export default function MoviesInfo() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const { data, isLoading } = useMovieInfo(params.id!) as {
    data: Movie;
    isLoading: boolean;
  };
  const { data: cast, isLoading: castIsLoading } = useMovieCast(params.id!) as {
    data: Weather;
    isLoading: boolean;
  };
  const { data: dataRec, isLoading: dataRecIsLoading } = useMovieRec(
    params.id!,
  );
  console.log(data);
  let year = isLoading ? null : data.release_date.split("-")[0];
  console.log(cast);
  return (
    <div className="h-screen overflow-x-hidden bg-slate-800 font-sans">
      <Header className="" showBlur={false} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col gap-10 lg:flex-row">
          <div>
            <img
              className="object-cover lg:h-full lg:w-[120vw]"
              src={getMovieImage(data.backdrop_path)}
              alt=""
            />
          </div>
          <div className="flex flex-col px-6 text-white md:pt-20">
            <span className="text-3xl md:text-5xl">{data.title}</span>
            <div className="flex flex-col gap-1 pt-4">
              <span>
                <span className="font-bold">Reslase Date :</span> {year}
              </span>
              <span>
                <span className="font-bold">IMDB Rating :</span>{" "}
                {data.vote_average}
              </span>
              <span>
                <span className="font-bold">Length :</span>{" "}
                {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
              </span>
            </div>
            <div className="mt-5 flex gap-3">
              {data.genres.map((genre) => (
                <span className="cursor-default rounded-md bg-gray-700 px-2 py-1 hover:bg-gray-500">
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-6">
              <p>
                <span className="font-bold">Overview : </span> {data.overview}
              </p>
              <div>
                <span className="text-2xl font-bold">Cast : </span>
                <div className="mt-4 flex flex-wrap   gap-3">
                  {castIsLoading ? (
                    <LoadingSpinner />
                  ) : (
                    cast.cast?.slice(0, 4).map((cast: CastEntity) => (
                      <div className="flex flex-col items-center px-4 py-2">
                        <img
                          className="h-20 w-20 rounded-full object-cover"
                          src={getMovieImage(cast.profile_path!)}
                          alt=""
                        />
                        <span className="mt-3 w-24 text-center">
                          {cast.name}
                        </span>
                      </div>
                    ))
                  )}{" "}
                  {castIsLoading ? null : (
                    <span className="my-auto text-2xl">
                      {" "}
                      + {cast.cast!.length - 4} more
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-2xl font-bold">Similar movies:</span>
                <div className="mb-24 mt-3 grid grid-flow-row-dense grid-cols-2 grid-rows-1 justify-items-center gap-8 overflow-x-scroll  md:overflow-x-hidden">
                  {dataRecIsLoading ? (
                    <LoadingSpinner />
                  ) : (
                    dataRec.results?.slice(0, 4).map((movie: Movie) => (
                      <div
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        className="mt-4 flex w-full max-w-xs cursor-pointer flex-col items-center justify-center  rounded-xl border-2  hover:bg-slate-700"
                      >
                        <img
                          className="object-fit h-full w-full  rounded-lg "
                          src={getMovieImage(movie.poster_path)}
                          alt=""
                        />
                        <span className="my-6 max-w-52   text-center text-lg md:text-xl">
                          {movie.title}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
