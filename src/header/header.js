import React from "react";
import './header.css'
import {Link, useLocation} from 'react-router-dom'

function Header({openPopup}) {

let location = useLocation()

    return (
        <nav className="header">
            <div className="header__wrap">
                <Link to='/' className="header__link"><h1 className="header__title">My Todo List</h1></Link>
                <Link to='/about' className="header__link header__about">About</Link>
            </div>
            {
                location.pathname == '/' && <button className="header__btn" onClick={openPopup}>Добавить</button>
            }
            
        </nav>
    )
}

export default Header