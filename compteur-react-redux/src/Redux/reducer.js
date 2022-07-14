import { increment,decrement } from "./actionType"


const init = {
    count : 0
}
const reducer =(state=init, { type } )=>{
    switch (type) {
        case increment:
            return{
                ...state,count:state.count<10? state.count+1:10
            }
        case decrement:
        return{
            ...state,count:state.count>0? state.count-1:0
        }    
        default:
            return state;
            
    }
}
export default reducer;