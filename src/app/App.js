import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../header/header';
import Main from '../main/main';
import AddTodoModal from '../addTodoModal/addTodoModal';
import CardPage from '../cardPage/cardPage';
import Modal from '../modal/modal';
import EditTodoModal from '../editTodoModal/editTodoModal';

function App() {
  const [todo, setTodo] = useState([])
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)

  function closePopup() {
    setAddModalIsOpen(false)
    setEditModalIsOpen(false)
  }

  function openAddModal() {
    setAddModalIsOpen(true)
  }
  function openEditModal() {
    setEditModalIsOpen(true)
  }

  function todoAdd(newTodo) {
    setTodo([...todo, newTodo])
    closePopup()
  }
  function editTodo(newTodo) {
    console.log(newTodo)
    setTodo(todo.map(item => {
      if(item.id == newTodo.id) {
        return {...item,
          title: newTodo.title != '' ? newTodo.title : item.title,
          completed: newTodo.completed != '' ? newTodo.completed : item.completed,
          comment: newTodo.comment != '' ? newTodo.comment : item.comment
        }
      }
      return item
    }))
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
      <Header openPopup={openAddModal}/>
      <Routes>
        <Route path="/" element={<Main todo={todo} checkedHandle={checkedHandle}/>}/>
        <Route path="/about" element={<p>about</p>}/>
        <Route path='/cards/:cardId' element={<CardPage todoList={todo} openEditModal={openEditModal} deleteItem={deleteHandle}/>}/>
      </Routes>
      
      <Modal isOpen={addModalIsOpen} onClose={closePopup}>
        <AddTodoModal addPopup={todoAdd}/>
      </Modal>
      <Modal isOpen={editModalIsOpen} onClose={closePopup}>
        <EditTodoModal onClose={closePopup} editHandle={editTodo}/>
      </Modal>
      
    </div>
  );
}

export default App;
