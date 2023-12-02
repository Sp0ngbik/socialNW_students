import {AppDispatch} from "../redux/store";
import {Auth_api} from "../../api/auth_api";
import {initializedSuccessAC} from "./app_reducer";


export type T_DataMe = {
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
type T_MainAuth = T_SetUserData


export const auth_reducer = (state = initialState, action: T_MainAuth): T_DataMe => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, data: {...action.userData.data, isAuth: true}}
        }
        default:
            return state
    }
}

const setAuthUserDataAC = (userData: T_AuthResponse) => {
    return {type: 'SET_USER_DATA', userData} as const
}

export const getUserAuthTC = () => async (dispatch: AppDispatch) => {
    const response = await Auth_api.authUser()
    dispatch(setAuthUserDataAC(response.data))
    dispatch(initializedSuccessAC())
}