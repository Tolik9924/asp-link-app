import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { linkReducer } from "./linkReducer";
import thunk from "redux-thunk";
import { longLinkReducer } from "./longLinkReducer";

const rootReducer = combineReducers({
    link: linkReducer,
    longLink: longLinkReducer
})

export const storeLink = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
