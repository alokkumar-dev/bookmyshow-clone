import { createStore,combineReducers } from "redux";

import { cityreducer } from "./city/reducer";


const rootreducer=combineReducers({
city:cityreducer,
})


export const store=createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)