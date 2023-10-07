import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/16RMWBb/year-4720870-1280.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold ">Event Management</h1>
            <p className="mb-5">
              Embrace each day with enthusiasm, for every moment is an
              opportunity to create a brighter tomorrow.
            </p>
            <Link to={'/prices'}><button className="btn hover:text-white btn-neutral">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
