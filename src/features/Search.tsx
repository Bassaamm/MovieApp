import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import MovieSearchCard from "@/components/MovieSearchCard";

export default function Search() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div className="flex  items-center  gap-8 ">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <FaSearch className="cursor-pointer text-xl text-white transition hover:text-gray-700" />
        </DialogTrigger>
        <DialogContent className=" max-w-3xl  rounded-lg bg-slate-900 text-white">
          <div className="  flex  flex-col gap-4">
            <label htmlFor="">Movie name </label>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="transform rounded-lg border-2 border-white bg-transparent px-4 py-1 text-white  transition-all duration-300 ease-in active:scale-105"
            />
          </div>
          <div className=" max-h-96  overflow-y-scroll">
            <MovieSearchCard search={search} onOpenChange={setOpen} />
          </div>

          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
