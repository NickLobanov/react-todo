import React, {useState, useEffect} from 'react';
import './App.css';
import Header from '../header/header';
import Main from '../main/main';
import AddPopup from '../addPopup/addPopup';

function App() {

  const [todo, setTodo] = useState([])
  const [popupIsOpen, setPopupIsOpen] = useState(false)

  function closePopup() {
    setPopupIsOpen(false)
  }

  function openPopup() {
    setPopupIsOpen(true)
  }

  function todoAdd(newTodo) {
    setTodo([...todo, newTodo])
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .then(response => response.json())
      .then(json => setTodo(json))
  }, [])

  return (
    <div className="app">
      <Header openPopup={openPopup}/>
      <Main todo={todo}/>
      <AddPopup isOpen={popupIsOpen} onClose={closePopup} addPopup={todoAdd}/>
    </div>
  );
}

export default App;
