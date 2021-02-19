import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {ticketsReducer, usuarioDetailReducer} from "./reducers/ticketReducer";
import {authReducer} from "./reducers/staffReducers";

const reducer = combineReducers({
    tickets: ticketsReducer,
    user: usuarioDetailReducer,
    auth: authReducer
})

let initialState = {}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;