import React from "react";
import './header.css'
import {Link, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { searchInput } from '../../actions'

function Header({openPopup}) {

    const dispatch = useDispatch()

    let location = useLocation()

    function inputHandle(e) {
        dispatch(searchInput(e.target.value))
    }

    return (
        <nav className="header">
            <div className="header__wrap">
                <Link to='/' className="header__link"><h1 className="header__title">My Todo List</h1></Link>
                <input onChange={inputHandle}
                    className="header__input" 
                    type="text" minLength="1" 
                    placeholder="Поиск по названию"/>
                <Link to='/about' className="header__link header__about">About</Link>
            </div>
            {
                location.pathname == '/' && <button className="header__btn" onClick={openPopup}>Добавить</button>
            }
            
        </nav>
    )
}

export default Header