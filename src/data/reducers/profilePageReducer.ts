import {T_PostsData} from "../data";
import {AppThunk} from "../redux/store";
import {Profile_api} from "../../api/profiile_api";

export type T_ProfilePage = {
    profileInfo: T_ProfileInfo | null,
    postsData: T_PostsData[],
    status: null | string
}

export type T_ProfileInfo = {
    aboutMe: string;
    contacts: T_ProfileContacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: T_ProfilePhoto;
}

type T_ProfileContacts = {
    facebook: string;
    vk: string;
    twitter: string;
    instagram: string;
    github: string;
}
type T_ProfilePhoto = {
    small: string;
    large: string;
}


type T_UpdateUserStatus = ReturnType<typeof updateUserStatusAC>
type T_SetUserStatus = ReturnType<typeof setUserStatusAC>
type T_SetUserInfo = ReturnType<typeof setUserInfoAC>
type T_AddPost = ReturnType<typeof addPostAC>
export type T_MainProfile = T_SetUserInfo | T_AddPost | T_SetUserStatus | T_UpdateUserStatus

const initialState: T_ProfilePage = {
    profileInfo: null,
    postsData: [
        {message: 'title message', likesCount: '5', id: '1'},
        {message: 'title message', likesCount: '5', id: '2'},
        {message: 'title message', likesCount: '5', id: '3'},
    ],
    status: null
}

export const profilePageReducer = (state = initialState, action: T_MainProfile) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {
                message: action.title, likesCount: '0', id: state.postsData.length.toString()
            }
            return {...state, postsData: [newPost, ...state.postsData], newValueForPost: ''}
        case "SET_USER_INFO": {
            return {...state, profileInfo: action.userInfo}
        }
        case "SET_USER_STATUS": {
            return {...state, status: action.status}
        }
        case "UPDATE_USER_STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}


const setUserStatusAC = (status: string) => {
    return {type: 'SET_USER_STATUS', status} as const
}

const setUserInfoAC = (userInfo: T_ProfileInfo) => {
    return {type: 'SET_USER_INFO', userInfo} as const
}
const updateUserStatusAC = (status: string) => {
    return {type: 'UPDATE_USER_STATUS', status} as const
}


export const addPostAC = (title: string) => {
    return {type: 'ADD_POST', title} as const
}

export const getUserInfoTC = (userId: string): AppThunk => async (dispatch) => {
    const res = await Profile_api.getUserInfo(userId)
    dispatch(setUserInfoAC(res.data))
}
export const getUserStatusTC = (userId: string): AppThunk => async (dispatch) => {
    const res = await Profile_api.getUserStatus(userId)
    dispatch(setUserStatusAC(res.data))
}
export const updateStatusTC = (status: string): AppThunk => async (dispatch) => {
    const res = await Profile_api.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}

