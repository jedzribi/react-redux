import { Add , Complete, Delete, Edit, Filter, Filter2} from "./actionType";



const InitTask ={
    todos:[
{
    id: Math.random()*1000,
    description:"go to learn in GMC",
    isDone:true,
    isFilter:true,
},
{
    id: Math.random()*1000,
    description:"do your workshop",
    isDone:true,
    isFilter:true,
},
{
    id: Math.random()*1000,
    description:"prepare your test one to one",
    isDone:false,
    isFilter:false
},
]}
const TaskReducer =(state=InitTask, {type,payload})=>{
    switch (type) {
        case Add :
            return {
                ...state,todos:[...state.todos, payload]
        }
        case Delete:
            return {
                ...state,todos:state.todos.filter(el=>el.id!==payload)
        }
        case Complete:
            return {
                ...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
        }
        case Filter2:
            return {
                ...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
        }
        case Edit :
            return {
                ...state,todos:state.todos.map(el=>el.id===payload.id?payload:el)
        }
        case Filter :
            return{
                ...state,todos:state.todos.filter(el=>el.isDone===payload)
            }
        
        
        default:
            return state;
        }        
}
export default TaskReducer