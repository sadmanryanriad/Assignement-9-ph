import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import Portfolio from "../Portfolio/Portfolio";
import Banner from "../Header/Banner";
import ScrollToTop from "react-scroll-to-top";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CalendarBox from "./Calendar/CalendarBox";

const Home = () => {

  useEffect(()=>{
    Aos.init();
  },[])

  const data = useLoaderData();
  return (
    <div className=" space-y-10">

      <div data-aos="fade-up" data-aos-duration="1500"><Banner></Banner></div>

      <Services cards={data}></Services>

      <CustomerFeedback></CustomerFeedback>

      <div data-aos = 'fade-right' data-aos-duration="1500"><Portfolio></Portfolio></div>

      <div data-aos = 'fade-right' data-aos-duration="1500"><CalendarBox></CalendarBox></div>

      <ScrollToTop smooth width='40' color='white' style={{ background: "#1D232B" }}></ScrollToTop>
    </div>
  );
};

export default Home;
