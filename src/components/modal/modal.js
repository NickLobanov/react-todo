import React from "react";
import './modal.css'

function Modal({children, onClose}) {

    function onClosePopup() {
        onClose()
    }

    return (
        <div className="popup" onClick={onClosePopup}>
            {children}
        </div>
    )
}

export default Modal