import {T_UsersState} from "../data/reducers/usersReducer";
import {axiosInstance} from "./axiosInstance";

type T_FollowUnfollowRequest = {
    resultCode: number,
    messages: string[],
    data: {}
}

export class Users_api {
    static getUser(activePage: number) {
        return axiosInstance.get<T_UsersState>(`users?page=${activePage}`)
    }

    static followUser(userId: number) {
        return axiosInstance.post<T_FollowUnfollowRequest>(`follow/${userId}`)
    }

    static unfollowUser(userId: number) {
        return axiosInstance.delete<T_FollowUnfollowRequest>(`follow/${userId}`)
    }
}



