import { useTitle } from "../hooks/useTitle";
import img from "../assets/IMG_4331.png";
export const MohPage = () => {
  useTitle("Mohsen");
  return (
    <main>
      <section className="flex justify-center lg:justify-between  flex-wrap py-2 mt-10">
        <div className="max-w-sm ">
          <img src={img} alt="" className="rounded-3xl " />
        </div>
        <div className="max-w-2xl flex flex-col gap-y-5 py-10">
          <h1 className="dark:text-white text-gray-900 font-bold text-3xl">
            False Detective
          </h1>
          <p className="dark:text-white text-gray-900 text-tight font-semibold ">
            A kid trying to push his way into the world of crimes to be come one
            of the greates detective but it's not easy because he is kind a
            dumb. Note from the fans: المحقق معصب طول الفلم مدري وش فيه
          </p>
          <ul className="flex gap-x-7 items-center">
            <li className="dark:text-white border text-gray-900 p-2 rounded-xl border-gray-500 hover:bg-slate-100 dark:hover:bg-slate-900">
              Horror
            </li>
            <li className="dark:text-white border text-gray-900 p-2 rounded-xl border-gray-500 hover:bg-slate-100 dark:hover:bg-slate-900">
              {" "}
              Mad Detective
            </li>
            <li className="dark:text-white border text-gray-900 p-2 rounded-xl border-gray-500 hover:bg-slate-100 dark:hover:bg-slate-900">
              Not funny
            </li>
            <li className="dark:text-white border text-gray-900 p-2 rounded-xl border-gray-500 hover:bg-slate-100 dark:hover:bg-slate-900">
              almost action{" "}
            </li>
          </ul>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
              0.1
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="3"
              className="text-lg font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              2 Reviews
            </a>
          </div>
          <ul className="flex flex-col gap-y-3">
            <li className="flex items-center gap-x-6">
              <p className="dark:text-white font-bold text-xl text-black">
                Length :
              </p>
              <p className="font-semibold text-md dark:text-white  text-xl text-black">
                120 min
              </p>
            </li>
            <li className="flex items-center gap-x-6">
              <p className="dark:text-white font-bold text-xl text-black">
                Budget :
              </p>
              <p className="font-semibold text-md dark:text-white  text-xl text-black">
                1.000.000
              </p>
            </li>
            <li className="flex items-center gap-x-6">
              <p className="dark:text-white font-bold text-xl text-black">
                revenue :
              </p>
              <p className="font-semibold text-md dark:text-white  text-xl text-black">
                -1
              </p>
            </li>
            <li className="flex items-center gap-x-6">
              <p className="dark:text-white font-bold text-xl text-black">
                Release Date :
              </p>
              <p className="font-semibold text-md dark:text-white  text-xl text-black">
                1970
              </p>
            </li>
            <li className="flex items-center gap-x-6">
              <p className="dark:text-white font-bold text-xl text-black">
                IMBD code :
              </p>
              <p className="font-semibold text-md dark:text-white  text-xl text-black">
                Null
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
