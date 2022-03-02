import React from "react";
import './modal.css'

function Modal({children, onClose, isOpen}) {

    function onClosePopup() {
        onClose()
    }

    return (
        <div className={isOpen ? "popup active" : "popup"} onClick={onClosePopup}>
            {children}
        </div>
    )
}

export default Modal