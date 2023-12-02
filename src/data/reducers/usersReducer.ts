import {AppDispatch} from "../redux/store";
import {Users_api} from "../../api/users_api";

export type T_UserBody = {
    id: number,
    name: string,
    status: string | null,
    photos: {
        small: string | null,
        large: string | null
    }
    followed: boolean
}
export type T_UsersState = {
    items: T_UserBody[],
    totalCount: number,
    pageSize: number,
    error: string | null,
    activePage: number,
    isFetching: boolean
}


const initialState: T_UsersState = {
    items: [],
    totalCount: 0,
    pageSize: 10,
    error: null,
    activePage: 1,
    isFetching: true
}

type T_ChangeFollowStatus = ReturnType<typeof followStatusAC>
type T_ChangeUnfollowStatus = ReturnType<typeof unfollowStatusAC>
type T_SetServerUsers = ReturnType<typeof setUsersFromServerAC>
type T_ChangeActivePage = ReturnType<typeof setNewActivePageAC>
type T_ChangeFetchingStatus = ReturnType<typeof setIsFetchingAC>
type T_MainUsersAC =
    T_ChangeFollowStatus
    | T_SetServerUsers
    | T_ChangeActivePage
    | T_ChangeFetchingStatus
    | T_ChangeUnfollowStatus

export const usersReducer = (state = initialState, action: T_MainUsersAC): T_UsersState => {
    switch (action.type) {
        case "FOLLOW_STATUS":
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW_USER":
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET_SERVER_USERS": {
            return {...state, items: action.userData, totalCount: action.totalCount, error: action.error,}
        }
        case "CHANGE_ACTIVE_PAGE": {
            return {...state, activePage: action.pageNumber}
        }
        case "CHANGE_FETCHING_STATUS": {
            return {...state, isFetching: action.status}
        }
        default:
            return state
    }
}


export const followStatusAC = (userId: number) => {
    return {type: 'FOLLOW_STATUS', userId} as const
}
export const unfollowStatusAC = (userId: number) => {
    return {type: 'UNFOLLOW_USER', userId} as const
}
export const setUsersFromServerAC = (userData: T_UserBody[], totalCount: number, error: string | null) => {
    return {type: 'SET_SERVER_USERS', userData, totalCount, error} as const
}

export const setNewActivePageAC = (pageNumber: number) => {
    return {type: 'CHANGE_ACTIVE_PAGE', pageNumber} as const
}
export const setIsFetchingAC = (status: boolean) => {
    return {type: 'CHANGE_FETCHING_STATUS', status} as const
}

//////////////THUNKS

export const followTC = (userId: number) => async (dispatch: AppDispatch) => {
    const response = await Users_api.followUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(followStatusAC(userId))
    }
}

export const unfollowTC = (userId: number) => async (dispatch: AppDispatch) => {
    const response = await Users_api.unfollowUser(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowStatusAC(userId))
    }
}

export const getUsersTC = (pageNumber: number) => async (dispatch: AppDispatch) => {
    dispatch(setNewActivePageAC(pageNumber))
    dispatch(setIsFetchingAC(true))
    const response = await Users_api.getUser(pageNumber)
    if (!response.data.error) {
        const {items, totalCount, error} = response.data
        dispatch(setUsersFromServerAC(items, totalCount, error))
    }
    dispatch(setIsFetchingAC(false))
}
