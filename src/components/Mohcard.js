import { Link } from "react-router-dom";
import IMG_4331 from "../assets/IMG_4331.png";

export const Mohcard = () => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
        <Link to={`/movie/mohsen`}>
          <img className="rounded-t-lg" src={IMG_4331} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/movie/mohsen`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              False Detective
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A kid trying to push his way into the world of crimes to be come one
            of the greates detective but it's not easy because he is kind a
            dumb. Note from the fans: المحقق معصب طول الفلم مدري وش فيه
          </p>
        </div>
      </div>
    </div>
  );
};
