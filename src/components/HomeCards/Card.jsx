import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const { id, title, image, price, description } = card;
  return (
    <div className="card-compact w-[22rem] bg-base-100 my-5 mx-auto"  data-aos="zoom-in"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
      <figure>
        <img
        className='rounded-lg h-[230px] w-full'
          src={image}
          alt="service image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="font-bold">Price: ${price}</h2>
        <p>{description.slice(0,100)}...</p>
        <div className="card-actions justify-center">
          <Link to={`services/${id}`}><button className="btn btn-success hover:text-white btn-sm mt-5">See details</button></Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;
