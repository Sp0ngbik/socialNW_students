import {RootState} from "../../redux/store";
import {createSelector} from "reselect";

export const getUsers = (state: RootState) => {
    return state.usersReducer.items
}

export const getSuperUsers = createSelector([getUsers],
    (user) => {
        return user
    })

export const getActivePage = (state: RootState) => {
    return state.usersReducer.activePage
}
export const getPageSize = (state: RootState) => {
    return state.usersReducer.pageSize
}
export const getTotalCount = (state: RootState) => {
    return state.usersReducer.totalCount
}
export const getIsFetching = (state: RootState) => {
    return state.usersReducer.isFetching
}
export const getFake = (state: RootState) => {
    return state.usersReducer.fake
}