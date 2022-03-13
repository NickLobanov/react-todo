import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from '../header/header';
import Main from '../main/main';
import AddTodoModal from '../addTodoModal/addTodoModal';
import CardPage from '../cardPage/cardPage';
import Modal from '../modal/modal';
import About from '../about/about';
import EditTodoModal from '../editTodoModal/editTodoModal';
import {getTodo} from '../../actions'
import DeleteTodoModal from '../deleteTodoModal/deleteTodoModal';

function App() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const [editableItem, setEditableItem] = useState(null)

  const dispatch = useDispatch()

  function closePopup() {
    setAddModalIsOpen(false)
    setEditModalIsOpen(false)
    setDeleteModalIsOpen(false)
  }

  function openAddModal() {
    setAddModalIsOpen(true)
  }
  function openEditModal(item) {
    setEditableItem(item)
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
        <Route path="/about" element={<About />}/>
        <Route path='/cards/:cardId' element={<CardPage openEditModal={openEditModal} openDeleteModal={openDeleteModal}/>}/>
      </Routes>
      
      {
        addModalIsOpen &&
          <Modal onClose={closePopup}>
            <AddTodoModal onClose={closePopup}/>
          </Modal>
      }

      {
        editModalIsOpen && 
          <Modal onClose={closePopup}>
            <EditTodoModal onClose={closePopup} itemData={editableItem}/>
          </Modal>
      }
      
      {
        deleteModalIsOpen && 
          <Modal onClose={closePopup}>
            <DeleteTodoModal onClose={closePopup}/>
          </Modal>
      }
      
      
      
    </div>
  );
}

export default App;
