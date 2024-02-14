import { Outlet } from "react-router-dom";
import Header from "./components/Header";
export default function AppLayout() {
  return (
    <div className=" h-screen bg-teal-600 font-sans">
      <Header />
      <Outlet />
    </div>
  );
}
