import { Add, Delete, Complete, Edit, Filter, Filter2 } from "./actionType"
export const handleAdd = (newTask) =>{
    return {
        type : Add,
        payload : newTask,
    }
}
export const handleDelete = (id)=>{
    return {
        type :Delete,
        payload : id ,
    }
}
export const handleComplete =(complitask)=>{
    return {
        type: Complete,
        payload : complitask,
    }
}
export const handleFilter2 =(id)=>{
    return {
        type: Filter2,
        payload : id,
    }
}
export const handleEdit=(editask)=>{
    return{
        type: Edit,
        payload: editask,
    }
}
export const handleFilter=(filtertask)=>{
    return{
        type: Filter,
        payload:filtertask,
    }
}