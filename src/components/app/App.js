import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from '../header/header';
import Main from '../main/main';
import AddTodoModal from '../addTodoModal/addTodoModal';
import CardPage from '../cardPage/cardPage';
import Modal from '../modal/modal';
import EditTodoModal from '../editTodoModal/editTodoModal';
import {getTodo} from '../../actions'
import DeleteTodoModal from '../deleteTodoModal/deleteTodoModal';

function App() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)

  const dispatch = useDispatch()

  function closePopup() {
    setAddModalIsOpen(false)
    setEditModalIsOpen(false)
    setDeleteModalIsOpen(false)
  }

  function openAddModal() {
    setAddModalIsOpen(true)
  }
  function openEditModal() {
    setEditModalIsOpen(true)
  }
  function openDeleteModal() {
    setDeleteModalIsOpen(true)
  }
  
  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  return (
    <div className="app">
      <Header openPopup={openAddModal}/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<p>about</p>}/>
        <Route path='/cards/:cardId' element={<CardPage openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>}/>
      </Routes>
      
      <Modal isOpen={addModalIsOpen} onClose={closePopup}>
        <AddTodoModal onClose={closePopup}/>
      </Modal>
      <Modal isOpen={editModalIsOpen} onClose={closePopup}>
        <EditTodoModal onClose={closePopup}/>
      </Modal>
      <Modal isOpen={deleteModalIsOpen} onClose={closePopup}>
        <DeleteTodoModal onClose={closePopup}/>
      </Modal>
      
    </div>
  );
}

export default App;
