import {
    GET_TODOS,
    DELETE_TODO,
    PATCH_TODO,
    ADD_TODO,
    SEARCH_INPUT,
    FILTER_HANDLE
} from '../actions'

const initialState = {
    todoList: [],
    searchInputValue: '',
    checkedTaskFilter: null,
    uncheckedTaskFilter: null
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS: {
            return {...state, todoList: action.todos}
        }
        case DELETE_TODO: {
            return {...state, todoList: [...state.todoList].filter(item => item.id != action.todoId)}
        }
        case ADD_TODO: {
            return {...state, todoList: [action.newTodo, ...state.todoList]}
        }
        case PATCH_TODO: {
            return {...state, todoList: [...state.todoList].map(item => item.id == action.editedTodo.id ?
                action.editedTodo : 
                item)}
        }
        case SEARCH_INPUT: {
            return {...state, searchInputValue: action.searchInputValue}
        }
        case FILTER_HANDLE: {
            return {...state, checkedTaskFilter: action.filterValue.checkedTask, uncheckedTaskFilter: action.filterValue.uncheckedTask}
        }
        default: {
            return state
        }
            
    }
}