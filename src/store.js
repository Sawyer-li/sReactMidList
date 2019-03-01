import { createStore } from 'redux'
import rootReducer from './reducers'
import { addTodo, toggleTodo, setFilter, setTodoText } from './actions'

const store = createStore(rootReducer);

//初始state
console.log(store.getState());

//订阅state
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(addTodo('learn about actions'));
store.dispatch(addTodo('learn no'));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter('active'));
store.dispatch(setTodoText('text'));

//取消订阅
unsubscribe();
export default store;
