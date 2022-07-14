import { AddTask, EditTask, FilterTask } from "./action";



const InitTask ={
    todos:[
{
    id: Date.now(),
    description:"go to learn in GMC",
    isDone:true,
},
{
    id: Date.now(),
    description:"do your workshop",
    isDone:true,
},
{
    id: Date.now(),
    description:"prepare your test one to one",
    isDone:true,
},
]}
const reducer =(state = InitTask, {type})=>{
    switch (type) {
        case AddTask :
        return {
            
        }
        case EditTask :
        return {
            
        }
        case FilterTask :
            return {

            }
        default:
            return state
    }
}
export default reducer