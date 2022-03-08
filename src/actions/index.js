export const GET_TODOS = 'GET_TODOS'
export const DELETE_TODO = 'DELETE_TODO'
export const PATCH_TODO = 'PATCH_TODO'
export const ADD_TODO = 'ADD_TODO'
export const SEARCH_INPUT = 'SEARCH_INPUT'
export const FILTER_HANDLE = 'FILTER_HANDLE'

export function getTodo() {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=30')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_TODOS,
                    todos: data
                })
            })
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        todoId: id
    }
}

export function patchTodo(newTodo) {
    return {
        type: PATCH_TODO,
        editedTodo: newTodo
    }
}

export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        newTodo: newTodo
    }
}

export function searchInput(value) {
    return {
        type: SEARCH_INPUT,
        searchInputValue: value
    }
}

export function filterHanlde(filterValue) {
    return {
        type: FILTER_HANDLE,
        filterValue: filterValue
    }
}