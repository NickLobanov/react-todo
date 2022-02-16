import React, {useState} from "react";
import './addPopup.css'

function AddPopup({isOpen, onClose, addPopup}) {

    const [title, setTitle] = useState('')

    function onClosePopup() {
        onClose()
    }

    function popupHandle(e) {
        e.preventDefault()
        addPopup({id: Math.random() * 1000, title: title, completed: false})
        setTitle('')
        onClose()
    }

    return (
        <div className={isOpen ? "popup active" : "popup"} onClick={onClosePopup}>
            <form className="popup__content" onSubmit={popupHandle} onClick={e => e.stopPropagation()}>
                <input className="popup__input" id='popupTodo' type='text' onChange={(e) => setTitle(e.target.value)} required />
                <button type="submit" className="popup__btn">Сохранить</button>
            </form>
        </div>
    )
}

export default AddPopup