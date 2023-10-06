import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full h-screen" style={{backgroundImage: 'url(https://i.ibb.co/cX6Rm9b/scattered-forcefields.png)'}}>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
