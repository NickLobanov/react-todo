import React from "react";
import  './card.css';
import {Link} from 'react-router-dom'

function Card({item, checkedHandle}) {

    function changeCheck(e) {
        checkedHandle({...item, completed: !item.completed})
    }

    return (
        <Link to={`/cards/${item.id}`} className="card">
            <h2 className="card__title">{item.title}</h2>
            <input className="card__check" type='checkbox' onChange={changeCheck} checked={item.completed}/>
        </Link>
        
    
    )
}

export default Card