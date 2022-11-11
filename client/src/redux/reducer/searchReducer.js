import { SEARCH_QUERY } from "../../type";


export const searchReducer=(state={},action)=>{

if(action.type===SEARCH_QUERY){

    return action.payload
}
return state
}