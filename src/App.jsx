import  { useState, useEffect } from "react";
import AddListForm from "./components/AddListForm";
import Board from "./components/Board";
import './App.css'; 

const App = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState("");

 
  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem("lists"));
    if (savedLists) setLists(savedLists);
  }, []);


  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  
  const addList = () => {
    if (!newListName.trim()) return;
    setLists([...lists, { id: Date.now(), name: newListName, cards: [] }]);
    setNewListName("");
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

