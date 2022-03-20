import React from "react";
import './main.css'
import Card from "../card/card";
import { useSelector } from 'react-redux'

function Main() {

    const {todoList, searchInputValue, checkedTaskFilter, uncheckedTaskFilter, inProgressFilter} = useSelector(state => ({
        todoList: state.todoList.todoList,
        searchInputValue: state.todoList.searchInputValue,
        checkedTaskFilter: state.todoList.checkedTaskFilter,
        uncheckedTaskFilter: state.todoList.uncheckedTaskFilter,
        inProgressFilter: state.todoList.inProgressFilter
    }))
    let filteredTodos
    
    if (checkedTaskFilter === null && uncheckedTaskFilter === null && inProgressFilter === null) {
        filteredTodos = todoList
    } else {
        filteredTodos = todoList.filter(item => item.completed == checkedTaskFilter || item.completed == uncheckedTaskFilter || item.completed == inProgressFilter)
    }
     
    let todos = searchInputValue ? filteredTodos.filter(item => item.title.includes(searchInputValue)) : filteredTodos
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