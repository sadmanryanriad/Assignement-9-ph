import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const { id, title, image, price, description } = card;
  return (
    <div className="card-compact w-[22rem] bg-base-100 my-5 mx-auto">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="font-bold">Price: {price}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <Link to={`services/${id}`}><button className="btn btn-neutral hover:text-white btn-sm mt-5">See details</button></Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;
