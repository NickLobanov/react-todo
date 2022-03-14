import React, {useState} from "react";
import './header.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { searchInput, filterHanlde } from '../../actions'

function Header({openPopup}) {

    const [checkedTask, setCheckedTask] = useState(false)
    const [uncheckedTask, setUncheckedTask] = useState(false)
    const [inProgress, setInProgress] = useState(false)
    const [filterActive, setFilterActive] = useState(false)

    const dispatch = useDispatch()

    let location = useLocation()
    let navigate = useNavigate()

    function inputHandle(e) {
        dispatch(searchInput(e.target.value))
    }

    function FilterHandle() {
        dispatch(filterHanlde({
            checkedTask: checkedTask ? checkedTask : null,
            uncheckedTask: uncheckedTask ? !uncheckedTask: null,
            inProgress: inProgress ? 'inProgress' : null
        }))
        setCheckedTask(false)
        setUncheckedTask(false)
        setInProgress(false)
    }

    function goBack() {
        navigate(-1)
    }

    return (
        <nav className="header">
            <div className="header__wrap">
                <Link to='/react-todo/' className="header__link"><h1 className="header__title">My Todos</h1></Link>
                {
                    location.pathname == '/react-todo/' &&
                        <>
                            <input onChange={inputHandle}
                            className="header__input" 
                            type="text" minLength="1" 
                            placeholder="Поиск по названию"/>
                            <Link to='/about' className="header__link header__about">About</Link>
                        </>  
                }
                
                
            </div>
            <div className="control__wrap">
                {
                    location.pathname == '/react-todo/' ? 
                        <>
                            <button className="header__btn" onClick={openPopup}>Добавить</button>
                            <div className={`filter ${filterActive && 'filter_active'}`}>
                                <ul className="filter__list">
                                    <li className="filter__item">
                                        <label>Завершеные <input name="checkedTask" 
                                            className="filter__checkbox"
                                            type="checkbox"
                                            checked={checkedTask}
                                            onChange={() => setCheckedTask(!checkedTask)}/>
                                        </label>
                                    </li>
                                    <li className="filter__item">
                                        <label>Не завершеные <input name="uncheckedTask"
                                            className="filter__checkbox" 
                                            type="checkbox"
                                            checked={uncheckedTask}
                                            onChange={() => setUncheckedTask(!uncheckedTask)}/></label>
                                    </li>
                                    <li className="filter__item">
                                        <label>В работе <input name="inProgress"
                                            className="filter__checkbox" 
                                            type="checkbox"
                                            checked={inProgress}
                                            onChange={() => setInProgress(!inProgress)}/></label>
                                    </li>
                                </ul>
                                <button className="header__btn header__btn_close" onClick={() => setFilterActive(false)}>Закрыть</button>
                            </div> 
                            
                            {
                                filterActive ? 
                                <button className="header__btn" onClick={FilterHandle}>Искать</button> 
                                :
                                <button className="header__btn" onClick={() => setFilterActive(true)}>Фильтр</button>
                            }
                            
                        </>
                    :
                        <button className="header__btn" onClick={goBack}>Назад</button> 
                }
                
            </div>
        </nav>
    )
}

export default Header