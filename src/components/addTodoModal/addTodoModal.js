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
            {id: Math.random() * 1000, title: title, completed: false}
        ))
        onClose()
        setTitle('')
    }

    return (
        <form className="popup__content" onSubmit={popupHandle} onClick={e => e.stopPropagation()}>
            <input className="popup__input" id='popupTodo' type='text' onChange={(e) => setTitle(e.target.value)} required />
            <button type="submit" className="popup__btn">Сохранить</button>
        </form>
    )
}

export default AddTodoModal