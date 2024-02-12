import { navRoutes } from "../utils/navRoutes";

export default function Header() {
  return (
    <div className="flex gap-5">
      {navRoutes.map((route) => (
        <div key={route.name} className="text-xl text-teal-400">
          {route.name}
        </div>
      ))}
    </div>
  );
}
