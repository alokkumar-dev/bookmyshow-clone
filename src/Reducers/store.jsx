import { createStore,combineReducers } from "redux";




const rootreducer=combineReducers({

})


export const store=createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)