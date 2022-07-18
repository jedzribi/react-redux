import { createStore } from "redux";
import TaskReducer from "./reducer";


const Devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(TaskReducer,Devtools)