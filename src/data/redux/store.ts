import {combineReducers, legacy_createStore} from "redux";
import {profilePageReducer} from "../reducers/profilePageReducer";
import {dialogsReducer} from "../reducers/dialogsReducer";
import {usersReducer} from "../reducers/usersReducer";

const rootReducer = combineReducers({
    profilePageReducer: profilePageReducer,
    dialogsReducer: dialogsReducer,
    usersReducer: usersReducer
})

export const reduxStore = legacy_createStore(rootReducer)
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch


// @ts-ignore
window.store=reduxStore