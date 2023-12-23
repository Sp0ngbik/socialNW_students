import {axiosInstance} from "./axiosInstance";

export type T_ProfileResponse = {
    resultCode: number,
    messages: string[],
    data: {}
}

export class Profile_api {
    static getUserInfo(userId: string) {
        return axiosInstance.get(`/profile/${userId}`)
    }

    static getUserStatus(userId: string) {
        return axiosInstance.get(`/profile/status/${userId}`)
    }

    static updateStatus(status: string) {
        return axiosInstance.put<T_ProfileResponse>('/profile/status', {status})
    }
}