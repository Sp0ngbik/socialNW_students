import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profilePageReducer} from "../reducers/profilePageReducer";
import {dialogsReducer} from "../reducers/dialogsReducer";
import {usersReducer} from "../reducers/usersReducer";
import thunk from "redux-thunk";
import {auth_reducer} from "../reducers/auth_reducer";
import {app_reducer} from "../reducers/app_reducer";

const rootReducer = combineReducers({
    profilePageReducer: profilePageReducer,
    dialogsReducer: dialogsReducer,
    usersReducer: usersReducer,
    authReducer: auth_reducer,
    appReducer: app_reducer
})

export const reduxStore = legacy_createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch


// @ts-ignore
window.store = reduxStore