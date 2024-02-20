import { Link } from "react-router-dom";
import { NavRoutesProps } from "../utils/navRoutes";

export default function NavButton({ route }: { route: NavRoutesProps }) {
  return (
    <Link to={route.path} className="md text-sm text-white">
      <span className=""> {route.name}</span>
    </Link>
  );
}
