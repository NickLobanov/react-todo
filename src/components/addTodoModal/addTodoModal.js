import React, {useState} from "react";
import './addTodoModal.css'
import {useDispatch} from 'react-redux'
import { addTodo } from '../../actions'

function AddTodoModal({onClose}) {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    function popupHandle(e) {
        e.preventDefault()
        dispatch(addTodo(
            {id: Math.floor(Math.random() * 1000), title: title, completed: false}
        ))
        onClose()
        setTitle('')
    }

    return (
        <form className="form" onSubmit={popupHandle} onClick={e => e.stopPropagation()}>
            <h2 className="form__title">Добавление нового Todo</h2>
            <label className="form__label" htmlFor="popupAddTodo"> Название </label>
            <input className="form__input" 
                id='popupAddTodo' 
                type='text' 
                placeholder="Введите название"
                onChange={(e) => setTitle(e.target.value)} required />
            <button type="submit" className="form__btn from__btn_add">Сохранить</button>
        </form>
    )
}

export default AddTodoModal