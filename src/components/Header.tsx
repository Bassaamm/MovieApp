import { navRoutes } from "../utils/navRoutes";
import NavButton from "./NavButton";
import Search from "@/features/Search";

import DropMenu from "./DropMenu";
interface HeaderProps {
  routes?: { name: string; path: string }[];
  className?: string;
  showSearch?: boolean;
  showBlur?: boolean;
}

export default function Header({
  routes = navRoutes,
  className = "",
  showSearch = true,
  showBlur = true,
}: HeaderProps) {
  return (
    <div className={`fixed z-10 w-full ${className}`}>
      <div
        className={`flex w-full justify-between gap-20 bg-opacity-100 p-8 text-base ${showBlur ? "backdrop-blur-md" : ""}`}
      >
        <div className="hidden lg:block">
          <nav className="flex gap-20 bg-transparent">
            {routes.map((route) => (
              <NavButton key={route.name} route={route} />
            ))}
          </nav>
        </div>
        <div className="block lg:hidden">
          <DropMenu />
        </div>
        {showSearch && <Search />}
      </div>
    </div>
  );
}
