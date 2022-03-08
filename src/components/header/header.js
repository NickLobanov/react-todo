import React, {useState} from "react";
import './header.css'
import {Link, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { searchInput, filterHanlde } from '../../actions'

function Header({openPopup}) {

    const [checkedTask, setCheckedTask] = useState(false)
    const [uncheckedTask, setUncheckedTask] = useState(false)

    const dispatch = useDispatch()

    let location = useLocation()

    function inputHandle(e) {
        dispatch(searchInput(e.target.value))
    }

    function FilterHandle() {
        dispatch(filterHanlde({
            checkedTask: checkedTask ? checkedTask : null,
            uncheckedTask: uncheckedTask ? !uncheckedTask: null
        }))
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
            <div className="control__wrap">
                {
                    location.pathname == '/' && <button className="header__btn" onClick={openPopup}>Добавить</button>
                }
                <ul className="filter">
                    <li className="filter__item">
                        <label>True: <input name="checkedTask" 
                            className="filter__input"
                            type="checkbox"
                            onClick={() => setCheckedTask(!checkedTask)}/>
                        </label>
                    </li>
                    <li className="filter__item">
                        <label>False: <input name="uncheckedTask"
                            className="filter__input" 
                            type="checkbox"
                            onClick={() => setUncheckedTask(!uncheckedTask)}/></label>
                    </li>
                </ul>
                <button className="filter__btn" onClick={FilterHandle}>Фильтр</button>
            </div>
        </nav>
    )
}

export default Header