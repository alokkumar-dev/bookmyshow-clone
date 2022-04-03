import { createStore,combineReducers } from "redux";
import { MovieReducer } from "../Redux/reducer";
import { cityreducer } from "./city/reducer";
import { productreducer } from "./product/reducer";

import { tokenreducer } from "./tokenkey/reducer";
const rootreducer=combineReducers({
city:cityreducer,
token:tokenreducer,
movie: MovieReducer,
product:productreducer
})


export const store=createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)