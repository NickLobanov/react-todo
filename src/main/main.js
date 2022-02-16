import React from "react";
import './main.css'
import Card from "../card/card";

function Main({todo}) {

    console.log(todo)
    return (
        <div className="main">
            {
                todo.map(item => (
                    <Card key={item.id} title={item.title} checked={item.completed}/>
                ))
            }
        </div>
    )
}

export default Main