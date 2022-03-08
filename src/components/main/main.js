import React from "react";
import './main.css'
import Card from "../card/card";
import { useSelector } from 'react-redux'

function Main() {

    const {todoList, searchInputValue} = useSelector(state => ({
        todoList: state.todoList.todoList,
        searchInputValue: state.todoList.searchInputValue
    }))

    let todos = searchInputValue ? todoList.filter(item => item.title.includes(searchInputValue)) : todoList
    return (
        <div className="main">
            {
                todos.map(item => (
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    )
}

export default Main