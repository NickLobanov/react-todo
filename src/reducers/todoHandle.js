import {
    GET_TODOS,
    DELETE_TODO,
    PATCH_TODO,
    ADD_TODO
} from '../actions'

const initialState = {
    todoList: []
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
        default: {
            return state
        }
            
    }
}