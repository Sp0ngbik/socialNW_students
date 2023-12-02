import {axiosInstance} from "./axiosInstance";
import {T_AuthResponse} from "../data/reducers/auth_reducer";

export class Auth_api {
    static authUser() {
        return axiosInstance.get<T_AuthResponse>('auth/me')
    }
}