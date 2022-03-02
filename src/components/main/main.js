import React from "react";
import './main.css'
import Card from "../card/card";
import { useSelector } from 'react-redux'

function Main() {

    const {todoList} = useSelector(state => ({
        todoList: state.todoList.todoList
    }))

    return (
        <div className="main">
            {
                todoList.map(item => (
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    )
}

export default Main