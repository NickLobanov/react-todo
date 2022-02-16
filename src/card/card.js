import React from "react";
import  './card.css'

function Card({title, checked}) {
    return (
        
        <div className="card">
            <h2 className="card__title">{title}</h2>
            <input className="card__check" type='checkbox' onChange={(e) => {}} checked={checked}/>
        </div>
    
    )
}

export default Card