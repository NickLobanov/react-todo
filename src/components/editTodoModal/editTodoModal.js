import React, {useState, useEffect} from "react";
import './editTodoModal.css';
import {useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {patchTodo} from '../../actions'

function EditTodoModal({onClose, itemData}) {

    let location = useLocation()
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        setTitle(itemData.title)
        setComment(itemData.comment)
    }, [])

    function submitForm(e) {
        e.preventDefault()
        dispatch(patchTodo(
            {
                id: location.pathname.replace(/[^0-9]/g,""),
                title: title,
                completed: status,
                comment: comment
            }
        ))
        onClose()
        setTitle('')
        setComment('')
        setStatus('')
    }

    return (
        <form className="form" onSubmit={submitForm} onClick={e => e.stopPropagation()}>
            <h2 className="form__title">Редактирование задачи</h2>
            <label className="form__label" htmlFor="title">Название</label>
            <input className="form__input" id="title" name="title" value={title ? title : ''} type="text" onChange={(e) => setTitle(e.target.value)}/>

            <label className="form__label" htmlFor="comment">Комментарий</label>
            <input className="form__input" id="comment" name="comment" value={comment ? comment : ''} type="text" onChange={(e) => setComment(e.target.value)}/>

            <label className="form__label" htmlFor="status">Статус</label>
            <select className="form__input" id="status" name="status" onChange={(e) => setStatus(e.target.value)}>
                <option value="0" selected="selected" disabled hidden>Статус задачи</option>
                <option value="true">Завершена</option>
                <option value="false">Не завершена</option>
                <option value="inProgress">В работе</option>
            </select>
            <div className="btn__wrap">
                <button type="submit" className="form__btn">Сохранить</button>
                <button type="button" className="form__btn" onClick={onClose}>Отмена</button>
            </div>
        </form>
    )
}

export default EditTodoModal