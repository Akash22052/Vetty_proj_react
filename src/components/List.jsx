import Card from "./Card";
import AddCardForm from "./AddcardForm";
import PropTypes from 'prop-types';

const List = ({ list, updateListName, deleteList, addCard, deleteCard }) => {
  return (
    <div className="list">
      <div className="list-header">
        <input 
          type="text" 
          value={list.name} 
          onChange={(e) => updateListName(list.id, e.target.value)} 
        />
        <button onClick={() => deleteList(list.id)}>X</button>
      </div>

      <div className="cards">
        {list.cards.map(card => (
          <Card key={card.id} card={card} onDelete={() => deleteCard(list.id, card.id)} />
        ))}
      </div>

      <AddCardForm onAddCard={(title, desc) => addCard(list.id, title, desc)} />
    </div>
  );
};
List.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })).isRequired
  }).isRequired,
  updateListName: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
};


export default List;
