import { ADD_PRODUCT} from "./action";
const initState={
    product:JSON.parse(localStorage.getItem("product"))||null
}

export const productreducer=(store=initState,{type,payload})=>{
    
    switch(type){
        case ADD_PRODUCT:localStorage.setItem( "product",JSON.stringify(payload)||null);
            case ADD_PRODUCT:
            return {...store,product:payload};

            default:return store;
    }
}