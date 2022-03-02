import React from "react";
import  './card.css';
import {Link} from 'react-router-dom'

function Card({item}) {


    return (
        <Link to={`/cards/${item.id}`} className="card">
            <h2 className="card__title">{item.title}</h2>
        </Link>
        
    
    )
}

export default Card