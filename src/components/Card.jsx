
import PropTypes from "prop-types";

const Card = ({ card }) => {
  return (
    <div className="card">
      <h4>{card.title}</h4>
      <p>{card.description}</p>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;


