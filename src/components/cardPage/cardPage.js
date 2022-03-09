import React from "react";
import './cardPage.css'
import { useParams } from "react-router-dom";
import Edit from '../../images/edit.svg';
import Delete from '../../images/delete.svg'
import { useSelector } from 'react-redux'


function CardPage({openEditModal, openDeleteModal}) {

    let {cardId} = useParams()

    const {todoList} = useSelector(state => ({
        todoList: state.todoList.todoList
    }))

    const item = todoList.find(elem => {
        return elem.id == cardId
    })

    return (
        <div className="todo__wrap">
            <h2 className="todo__title">{item.title}</h2>
            {item.comment && <p className="todo__comment">{item.comment}</p>}
            {item.completed ? 
            <span className="todo__circle todo__circle_checked">Завершена</span> : <span className="todo__circle todo__circle_unchecked">Не завершена</span>}
            <div className="todo__container">
                <img className="todo__btn" src={Edit} alt='Редактирование' onClick={openEditModal} />
                <img className="todo__btn" src={Delete} alt='Удаление' onClick={openDeleteModal}/>
            </div>
            
        </div>
    )
}

export default CardPage