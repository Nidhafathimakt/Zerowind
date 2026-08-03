import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AppRoutes;