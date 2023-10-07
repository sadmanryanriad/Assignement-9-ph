import PropTypes from 'prop-types';

const PortfolioPhoto = ({image}) => {
    return (
        <div>
            <img className="w-full h-96 rounded-lg" src={image} alt="" />
        </div>
    );
};

PortfolioPhoto.propTypes = {
    image: PropTypes.string
}

export default PortfolioPhoto;