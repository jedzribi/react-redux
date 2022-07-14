import { decrement, increment } from "./actionType"




export const handlePlus =()=>{
    return{
        type:increment,
    }
}
export const handleMinus =()=>{
    return{
        type:decrement,
    }
}