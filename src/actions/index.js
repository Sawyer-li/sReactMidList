import {ADD_TODO,TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER, FETCH_TODOS_FAILURE, FETCH_TODOS_SUCCESS, FETCH_TODOS_REQUEST} from './actionTypes'
let nextTodoId = 0;

export const fetchTodosRequest = (data) => ({
    type: FETCH_TODOS_REQUEST,
    data
})
export const fetchTodosSuccess= (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data
})
export const fetchTodosFailure= (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
})

export const fetchTodo = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        return fetch("./mock/todos.json").then(
            response => {
                response.json().then(data => {
                    dispatch(fetchTodosSuccess(data))
                })
            },
            error => {
                dispatch(fetchTodosFailure(error))
                console.log('An error occurred' + error)
            }
        )
    }
}

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

/**
 * 设置过滤条件
 * @param {*} filter 
 */
export const setFilter = filter =>  ({
    type: SET_FILTER,
    filter
})

/**
 * 更改待办事项
 * @param {*} text 
 */
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})