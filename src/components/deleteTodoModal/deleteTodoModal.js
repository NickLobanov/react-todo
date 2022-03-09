import React from "react";
import './deleteTodoModal.css'
import {useLocation, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { deleteTodo } from '../../actions'

function DeleteTodoModal({onClose}) {

    const dispatch = useDispatch()
    let location = useLocation()
    let navigate = useNavigate()

    function handleDeleteClick() {
        dispatch(deleteTodo(location.pathname.replace(/[^0-9]/g,"")))
        navigate('/')
    }

    return (
        <form className="form form_delete">
            <h2 className="form__title form__title_delete">Удалить Todo?</h2>
            <div className="btn__wrap btn__wrap_delete">
                <button type="button" className="form__btn" onClick={handleDeleteClick}>Удалить</button>
                <button type="button" className="form__btn" onClick={onClose}>Отмена</button>
            </div>
        </form>
    )
}

export default DeleteTodoModal