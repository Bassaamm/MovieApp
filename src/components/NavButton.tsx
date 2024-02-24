import { NavLink } from "react-router-dom";
import { NavRoutesProps } from "../utils/navRoutes";

export default function NavButton({ route }: { route: NavRoutesProps }) {
  return (
    <NavLink
      to={route.path}
      className=" text-sm font-normal text-slate-900  md:font-semibold lg:text-white"
    >
      <span className=""> {route.name}</span>
    </NavLink>
  );
}
