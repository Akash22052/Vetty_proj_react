
import PropTypes from "prop-types";

const AddListForm = ({ newListName, setNewListName, addList }) => {
  return (
    <div className="add-list-form">
      <input
        type="text"
        placeholder="Enter list name"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
      />
      <button onClick={addList}>+ Add List</button>
    </div>
  );
};

AddListForm.propTypes = {
  newListName: PropTypes.string.isRequired,
  setNewListName: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired
};

export default AddListForm;
