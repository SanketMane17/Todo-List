import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TodoReducer } from "./reducers/TodoReducers";

// Create reducer
const reducer = combineReducers({
    Todo: TodoReducer
});

const intialState = {};

const middleware = [thunk];

// Create store
const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
