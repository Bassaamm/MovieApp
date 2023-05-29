import { Routes, Route } from "react-router-dom";
import { Test } from "../components/Test";

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Test api="" title="" />} />
      </Routes>
    </main>
  );
};
