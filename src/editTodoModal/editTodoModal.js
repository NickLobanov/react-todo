import React, {useState} from "react";
import './editTodoModal.css';
import {useLocation} from 'react-router-dom'

function EditTodoModal({onClose, editHandle}) {

    let location = useLocation()

    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const [status, setStatus] = useState('')

    function submitForm(e) {
        e.preventDefault()
        console.log(location)
        editHandle({
            id: location.pathname.replace(/[^0-9]/g,""),
            title: title,
            completed: status,
            comment: comment
        })
        onClose()
        setTitle('')
        setComment('')
        setStatus('')
    }

    return (
        <form className="popup__content" onSubmit={submitForm} onClick={e => e.stopPropagation()}>
            <h2 className="form__title">Редактирование задачи</h2>
            <label className="form__label" htmlFor="title">Название</label>
            <input className="form__input" id="title" name="title" type="text" onChange={(e) => setTitle(e.target.value)}/>

            <label className="form__label" htmlFor="comment">Комментарий</label>
            <input className="form__input" id="comment" name="comment" type="text" onChange={(e) => setComment(e.target.value)}/>

            <label className="form__label" htmlFor="status">Статус</label>
            <select className="form__select" id="status" name="status" onChange={(e) => setStatus(e.target.value)}>
                <option value="0" selected="selected" disabled hidden>Статус задачи</option>
                <option value="1">Завершена</option>
                <option value="2">Не завершена</option>
                <option value="3">Важная</option>
            </select>
            <div>
                <button type="submit">Сохранить</button>
                <button type="button">Отмена</button>
            </div>
        </form>
    )
}

export default EditTodoModal