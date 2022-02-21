import React from "react";
import './main.css'
import Card from "../card/card";

function Main({todo, checkedHandle}) {

    return (
        <div className="main">
            {
                todo.map(item => (
                    <Card key={item.id} item={item} checkedHandle={checkedHandle}/>
                ))
            }
        </div>
    )
}

export default Main