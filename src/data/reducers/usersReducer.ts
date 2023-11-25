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

type T_ChangeFollowStatus = ReturnType<typeof changeFollowStatusAC>
type T_SetServerUsers = ReturnType<typeof setUsersFromServerAC>
type T_ChangeActivePage = ReturnType<typeof setNewActivePageAC>
type T_ChangeFetchingStatus = ReturnType<typeof setIsFetchingAC>

type T_MainUsersAC = T_ChangeFollowStatus | T_SetServerUsers | T_ChangeActivePage | T_ChangeFetchingStatus

export const usersReducer = (state = initialState, action: T_MainUsersAC) => {
    switch (action.type) {
        case "CHANGE_FOLLOW":
            return {
                ...state,
                users: state.items.map(u => u.id === action.userId ? {...u, follow: action.follow} : u)
            }
        case "SET_SERVER_USERS": {
            return {...state, items: action.userData, totalCount: action.totalCount, error: action.error}
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


export const changeFollowStatusAC = (userId: number, follow: boolean) => {
    return {type: 'CHANGE_FOLLOW', userId, follow} as const
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
