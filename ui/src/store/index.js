import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { linkReducer } from "./linkReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    link: linkReducer
})

export const storeLink = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
