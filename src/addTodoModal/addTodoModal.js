import React, {useState} from "react";
import './addTodoModal.css'

function AddTodoModal({addPopup}) {

    const [title, setTitle] = useState('')

    function popupHandle(e) {
        e.preventDefault()
        addPopup({id: Math.random() * 1000, title: title, completed: false})
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