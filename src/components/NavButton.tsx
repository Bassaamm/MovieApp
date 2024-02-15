import { Link } from "react-router-dom";
import { NavRoutesProps } from "../utils/navRoutes";

export default function NavButton({ route }: { route: NavRoutesProps }) {
  return (
    <Link to={route.path} className="text-white">
      {route.name}
    </Link>
  );
}
