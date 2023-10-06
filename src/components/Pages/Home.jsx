import { useLoaderData } from "react-router-dom";
import HomeCards from "../HomeCards/HomeCards";
import Services from "./Services";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import Portfolio from "../Portfolio/Portfolio";
import Banner from "../Header/Banner";

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
    </div>
  );
};

export default Home;
