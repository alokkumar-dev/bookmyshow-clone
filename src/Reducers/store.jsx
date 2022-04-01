import { createStore,combineReducers } from "redux";

import { cityreducer } from "./city/reducer";

import { tokenreducer } from "./tokenkey/reducer";
const rootreducer=combineReducers({
city:cityreducer,
token:tokenreducer
})


export const store=createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)