import { navRoutes } from "../utils/navRoutes";
import NavButton from "./NavButton";
import Search from "@/features/Search";

import DropMenu from "./DropMenu";
export default function Header() {
  return (
    <div className="fixed z-10 w-full ">
      <div className="flex  w-full justify-between gap-20  bg-opacity-10 p-8 text-base backdrop-blur-md">
        <div className="hidden md:block">
          <nav className="flex gap-20 bg-transparent">
            {navRoutes.map((route) => (
              <NavButton key={route.name} route={route} />
            ))}
          </nav>
        </div>
        <div className="block md:hidden">
          <DropMenu />
        </div>
        <Search />
      </div>
    </div>
  );
}
