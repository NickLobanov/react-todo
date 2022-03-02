import {todoReducer} from './todoHandle.js'
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    todoList: todoReducer
})