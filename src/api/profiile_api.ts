import {axiosInstance} from "./axiosInstance";

export class Profile_api {
    static getUserInfo(userId: number) {
        return axiosInstance.get(`/profile/${userId}`)
    }
}