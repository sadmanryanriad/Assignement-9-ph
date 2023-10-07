import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="relative">
      <img
        className="w-screen h-screen fixed top-0 left-0 z-0"
        src="/scattered-forcefields.svg"
        alt=""
      />
      <div className="max-w-6xl mx-auto relative">
        <Navbar />
        <Outlet />
        <div className="mt-20">
        <Footer />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Root;
