import {applyMiddleware, combineReducers, createStore} from "redux";
import actorsReducer from "./actors-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    actor: actorsReducer
});
let store = createStore(reducers, applyMiddleware(thunk));
export default store

