import {axiosInstance} from "./axiosInstance";
import {T_AuthResponse} from "../data/reducers/auth_reducer";

export type T_LoginData = {
        email: string,
        password: string,
        rememberMe: boolean
}

export class Auth_api {
    static authUser() {
        return axiosInstance.get<T_AuthResponse>('auth/me')
    }

    static loginUser(data: T_LoginData) {
        return axiosInstance.post('auth/login', data)
    }

    static logOutUser() {
        return axiosInstance.delete('auth/login')
    }
}