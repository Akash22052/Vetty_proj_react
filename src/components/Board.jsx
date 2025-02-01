import PropTypes from "prop-types";
import AddCardForm from "./AddcardForm";
import Card from "./Card";

const Board = ({ lists, setLists }) => {
  const addCard = (listId, title, description) => {
    if (!title.trim() || !description.trim()) return;
    const newCard = { id: Date.now(), title, description, creationTime: Date.now() };
    const updatedLists = lists.map((list) =>
      list.id === listId ? { ...list, cards: [newCard, ...list.cards] } : list
    );
    setLists(updatedLists);
  };

  const deleteList = (id) => {
    if (window.confirm("Are you sure you want to delete this list?")) {
      setLists(lists.filter((list) => list.id !== id));
    }
  };

  return (
    <div className="board">
      {lists.map((list) => (
        <div key={list.id} className="list">
          <div className="list-header">
            <input
              type="text"
              value={list.name}
              onChange={(e) =>
                setLists(
                  lists.map((item) =>
                    item.id === list.id ? { ...item, name: e.target.value } : item
                  )
                )
              }
            />
            <button className="delete-btn" onClick={() => deleteList(list.id)}>
              X
            </button>
          </div>

          <div className="cards">
            {list.cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>

          <AddCardForm onAddCard={(title, description) => addCard(list.id, title, description)} />
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  lists: PropTypes.array.isRequired,
  setLists: PropTypes.func.isRequired
};

export default Board;


