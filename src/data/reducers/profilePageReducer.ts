import {ADD_POST, ON_CHANGE_POST_VALUE} from "../../helpers/actionTypes";
import {T_PostsData} from "../data";

type T_AddPost = {
    type: typeof ADD_POST,
}
export type T_ProfilePage = {
    profileInfo: T_ProfileInfo | null,
    newValueForPost: string,
    postsData: T_PostsData[]
}
type T_OnChangePostValue = {
    type: typeof ON_CHANGE_POST_VALUE,
    value: string
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


type T_SetUserInfo = ReturnType<typeof setUserInfoAC>
export type T_MainProfile = T_AddPost | T_OnChangePostValue | T_SetUserInfo

const initialState: T_ProfilePage = {
    profileInfo: null,
    newValueForPost: '',
    postsData: [
        {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
        {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
        {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
    ]
}

export const profilePageReducer = (state = initialState, action: T_MainProfile) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {
                message: state.newValueForPost, likesCount: '0', id: crypto.randomUUID()
            }
            return {...state, postsData: [newPost, ...state.postsData], newValueForPost: ''}

        case "ON_CHANGE_POST_VALUE":
            return {...state, newValueForPost: action.value}
        case "SET_USER_INFO": {
            return {...state, profileInfo: action.userInfo}
        }
        default:
            return state
    }
}


export const setUserInfoAC = (userInfo: T_ProfileInfo) => {
    return {type: 'SET_USER_INFO', userInfo} as const
}