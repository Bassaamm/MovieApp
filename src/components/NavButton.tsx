import { Link } from "react-router-dom";
import { NavRoutesProps } from "../utils/navRoutes";

export default function NavButton({ route }: { route: NavRoutesProps }) {
  return (
    <Link
      to={route.path}
      className=" text-sm font-normal text-slate-900 md:font-semibold md:text-white"
    >
      <span className=""> {route.name}</span>
    </Link>
  );
}
