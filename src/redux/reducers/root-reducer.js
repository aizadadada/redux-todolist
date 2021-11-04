import { combineReducers } from 'redux';
import todosReducer from '../reducers/reducer';


const rootReducer = combineReducers({
    todos: todosReducer,

});


export default rootReducer;