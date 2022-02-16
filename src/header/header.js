import React from "react";
import './header.css'

function Header({openPopup}) {
    return (
        <nav className="header">
            <h1 className="header__title">My Todo List</h1>
            <button className="header__btn" onClick={openPopup}>Добавить</button>
        </nav>
    )
}

export default Header