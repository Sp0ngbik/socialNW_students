import {AppDispatch, AppThunk} from "../redux/store";
import {Auth_api, T_LoginData} from "../../api/auth_api";
import {initializedSuccessAC} from "./app_reducer";


export type T_DataMe = {
    resultCode?: number
    data: {
        id: number | null;
        login: string;
        email: string;
        isAuth: boolean
    }
}

export type T_AuthResponse = Omit<T_DataMe, 'isAuth'>


const initialState: T_DataMe = {
    data: {
        id: null,
        login: '',
        email: '',
        isAuth: false,
    }
}

type T_SetUserData = ReturnType<typeof setAuthUserDataAC>
type T_SetUserLogout = ReturnType<typeof setLogOutUserAC>
type T_MainAuth = T_SetUserData | T_SetUserLogout


export const auth_reducer = (state = initialState, action: T_MainAuth): T_DataMe => {
    switch (action.type) {
        case "SET_USER_AUTH": {
            return {...state, data: {...action.userData.data, isAuth: true}}
        }
        case "SET_USER_LOGOUT": {
            return {...state, data: {id: 0, login: '', email: '', isAuth: false}}
        }
        default:
            return state
    }
}

const setAuthUserDataAC = (userData: T_AuthResponse) => {
    return {type: 'SET_USER_AUTH', userData} as const
}
const setLogOutUserAC = () => {
    return {type: 'SET_USER_LOGOUT'} as const
}

export const getUserAuthTC = (): AppThunk => async (dispatch: AppDispatch) => {
    const response = await Auth_api.authUser()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(response.data))
    }
        dispatch(initializedSuccessAC())
}

export const setUserLoginTC = (data: T_LoginData): AppThunk => async (dispatch) => {
    const response = await Auth_api.loginUser(data)
    if (response.data.resultCode === 0) {
        dispatch(getUserAuthTC())
    }
}

export const setUserLogoutTC = (): AppThunk => async (dispatch) => {
    const response = await Auth_api.logOutUser()
    if (response.data.resultCode === 0) {
        dispatch(setLogOutUserAC())
    }
}