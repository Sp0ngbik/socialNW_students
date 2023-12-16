import {T_PostsData} from "../data";

export type T_ProfilePage = {
    profileInfo: T_ProfileInfo | null,
    postsData: T_PostsData[]
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
type T_AddPost = ReturnType<typeof addPostAC>
export type T_MainProfile =   T_SetUserInfo|T_AddPost

const initialState: T_ProfilePage = {
    profileInfo: null,
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
                message:action.title, likesCount: '0', id: crypto.randomUUID()
            }
            return {...state, postsData: [newPost, ...state.postsData], newValueForPost: ''}

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

export const addPostAC = (title:string)=>{
    return {type:'ADD_POST',title}as const
}