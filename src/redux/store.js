import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";

let middleware = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
