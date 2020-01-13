import { SET_CITY } from "../actionTypes"

 
 
 const initialState = {
     city: ""
 }

 const cityReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_CITY: return {
            ...state,
            city: action.payload
        }
        default: return state;
    }
 }

 export default cityReducer