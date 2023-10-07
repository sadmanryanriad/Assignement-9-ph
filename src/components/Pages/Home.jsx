import { useLoaderData } from "react-router-dom";
import HomeCards from "../HomeCards/HomeCards";
import Services from "./Services";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import Portfolio from "../Portfolio/Portfolio";
import Banner from "../Header/Banner";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {

  const data = useLoaderData();
  return (
    <div className=" space-y-10">
      <Banner></Banner>
      <Services></Services>
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <HomeCards cards={data} ></HomeCards>
      <CustomerFeedback></CustomerFeedback>
      <Portfolio></Portfolio>
      <ScrollToTop smooth width='40' color='white' style={{ background: "#1D232B" }}></ScrollToTop>
    </div>
  );
};

export default Home;
