import { useState } from "react";
import { navRoutes } from "../utils/navRoutes";
import NavButton from "./NavButton";
import { FaSearch } from "react-icons/fa";
import cn from "classnames";
import { useDebounce } from "@uidotdev/usehooks";
import { useMovieSearch } from "../features/useMovieSearch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 600);
  const { data } = useMovieSearch(debounceSearch);
  console.log(data);
  console.log(debounceSearch);
  return (
    <div className="fixed z-10 w-full ">
      <div className="flex  w-full justify-between gap-20  bg-opacity-10 p-8 text-base backdrop-blur-md">
        <nav className="flex gap-20 bg-transparent">
          {navRoutes.map((route) => (
            <NavButton key={route.name} route={route} />
          ))}
        </nav>
        <div className="flex items-center  gap-8 ">
          <Dialog>
            <DialogTrigger asChild>
              <FaSearch
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer text-xl text-white transition hover:text-gray-700"
              />
            </DialogTrigger>
            <DialogContent className="bg-transparent sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">
                    Name
                  </label>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="username" className="text-right">
                    Username
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    className={cn(
                      "transform rounded-2xl border-2 border-white bg-transparent px-4 py-1 text-white  transition-all duration-300 ease-in active:scale-105",
                      {
                        "translate-0 pointer-events-auto opacity-100": isOpen,
                        "translate-full pointer-events-none opacity-0": !isOpen,
                      },
                    )}
                  />{" "}
                </div>
              </div>
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
