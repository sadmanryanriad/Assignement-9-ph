import Card from "./Card";
import PropTypes from 'prop-types';
const HomeCards = ({cards}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                cards.map(card=><Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

HomeCards.propTypes = {
    cards: PropTypes.array
}

export default HomeCards;