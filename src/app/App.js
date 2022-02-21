import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../header/header';
import Main from '../main/main';
import AddPopup from '../addPopup/addPopup';
import CardPage from '../cardPage/cardPage';

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

  function checkedHandle(todoItem) {
    setTodo(todo.map(item => {
      if(item.id == todoItem.id) {
        return item = todoItem
      }
      return item
    }))
  }

  function deleteHandle(id) {
    setTodo(todo.filter(item => item.id != id))
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=30')
      .then(response => response.json())
      .then(json => setTodo(json))
  }, [])

  return (
    <div className="app">
      <Header openPopup={openPopup}/>
      <Routes>
        <Route path="/" element={<Main todo={todo} checkedHandle={checkedHandle}/>}/>
        <Route path="/about" element={<p>about</p>}/>
        <Route path='/cards/:cardId' element={<CardPage todoList={todo} deleteItem={deleteHandle}/>}/>
      </Routes>
      <AddPopup isOpen={popupIsOpen} onClose={closePopup} addPopup={todoAdd}/>
      
    </div>
  );
}

export default App;
