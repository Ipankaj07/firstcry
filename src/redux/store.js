import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";


export const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
