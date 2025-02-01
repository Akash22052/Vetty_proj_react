import { useState } from "react";
import PropTypes from "prop-types";

const AddCardForm = ({ onAddCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="add-card-form">
      <input
        type="text"
        placeholder="Card Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Card Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          onAddCard(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        + Add Card
      </button>
    </div>
  );
};

AddCardForm.propTypes = {
  onAddCard: PropTypes.func.isRequired
};

export default AddCardForm;

