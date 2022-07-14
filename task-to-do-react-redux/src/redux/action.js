import { Add, Edit, Filter } from "./actionType";

export const AddTask = (addtodo) =>{
    return {
        type : Add,
        payload : addtodo,
    }
};
export const EditTask =() =>{
    return {
        type : Edit
    }
};
export const FilterTask = () =>{
    return {
        type : Filter
    }
};