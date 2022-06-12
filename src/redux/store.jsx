

import { combineReducers, legacy_createStore } from "redux";
import {authReducer} from "./auth/reducer"
import {todoReducer} from "./todo/reducer"

const rootReducer = combineReducers({
    auth:authReducer,
    todos:todoReducer
});


export const store = createStore(rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_&&Window._REDUX_DEVTOOLS_EXTENSION_())