import { navRoutes } from "../utils/navRoutes";
import NavButton from "./NavButton";

export default function Header() {
  return (
    <div className="flex  w-full gap-20 bg-white bg-opacity-10 p-8 text-base backdrop-blur-md">
      <nav className="flex gap-20 bg-transparent">
        {navRoutes.map((route) => (
          <NavButton key={route.name} route={route} />
        ))}
      </nav>
    </div>
  );
}
