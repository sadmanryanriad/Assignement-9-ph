import HomeCards from "../HomeCards/HomeCards";
import PropTypes from "prop-types";

const Services = ({ cards }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <HomeCards cards={cards}></HomeCards>
    </div>
  );
};

Services.propTypes = {
  cards: PropTypes.array,
};

export default Services;
