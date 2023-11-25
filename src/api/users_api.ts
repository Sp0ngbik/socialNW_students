import {T_UsersState} from "../data/reducers/usersReducer";
import {axiosInstance} from "./axiosInstance";

export class Users_api {
    static getUser(activePage: number) {
        return axiosInstance.get<T_UsersState>(`users?page=${activePage}`)
    }
}



