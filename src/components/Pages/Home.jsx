import { useLoaderData } from "react-router-dom";
import Carousel from "../Header/Carousel";
import HomeCards from "../HomeCards/HomeCards";
import Services from "./Services";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";

const Home = () => {

  const data = useLoaderData();
  return (
    <div className=" space-y-10">
      <Carousel></Carousel>
      <Services></Services>
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <HomeCards cards={data} ></HomeCards>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default Home;
