import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import mainPageReducer from "./mainPageReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    mainPage: mainPageReducer,
});

let store = createStore(reducers);

export default store;