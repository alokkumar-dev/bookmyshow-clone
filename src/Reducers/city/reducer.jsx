import { ADD_CITY} from "./action";
const initState={
    city:""
}

export const todoreducer=(store=initState,{type,payload})=>{
    
    switch(type){

            case ADD_CITY:
            return {...store,city:payload};

            default:return store;
    }
}