import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[10%,1fr] overflow-y-hidden bg-teal-600 font-sans">
      <Header />
      <Outlet />
    </div>
  );
}
