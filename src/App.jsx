import  { useState, useEffect } from "react";
import AddListForm from "./components/AddListForm";
import Board from "./components/Board";
import './App.css'; // Importing external CSS

const App = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");

  // Load data from localStorage on first render
  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem("lists"));
    if (savedLists) setLists(savedLists);
  }, []);

  // Save to localStorage whenever lists change
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  // Add a new list
  const addList = () => {
    if (!newListName.trim()) return;
    setLists([...lists, { id: Date.now(), name: newListName, cards: [] }]);
    setNewListName(""); // Clear input after adding the list
  };

  return (
    <div className="app-container">
      <div className="fixed-header">
        <AddListForm
          newListName={newListName}
          setNewListName={setNewListName}
          addList={addList}
        />
      </div>
      <Board lists={lists} setLists={setLists} />
    </div>
  );
};

export default App;

