import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full h-screen" style={{backgroundImage: 'url(https://i.ibb.co/cX6Rm9b/scattered-forcefields.png)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
