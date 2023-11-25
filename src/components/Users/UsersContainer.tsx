import {connect} from "react-redux";
import Users from "./Users";
import {RootState} from "../../data/redux/store";
import {
    changeFollowStatusAC, setIsFetchingAC,
    setNewActivePageAC,
    setUsersFromServerAC,
    T_UserBody,
} from "../../data/reducers/usersReducer";
import React from "react";
import {Users_api} from "../../api/users_api";

export type T_UserContainer = {
    users: T_UserBody[],
    activePage: number,
    changeFollowStatusAC: (userId: number, follow: boolean) => void
    setUsersFromServerAC: (usersData: T_UserBody[], totalCount: number, error: string | null) => void
    setNewActivePageAC: (pageNumber: number) => void
    setIsFetchingAC: (status: boolean) => void
    pageSize: number
    totalCount: number
    isFetching: boolean
}

class SuperUserContainer extends React.Component <T_UserContainer> {
    componentDidMount() {
        Users_api.getUser(this.props.activePage).then(res => {
            const data = res.data
            this.props.setUsersFromServerAC(data.items, data.totalCount, data.error)
        }).finally(() => {
            this.props.setIsFetchingAC(false)
        })
    }

    onPageChangeHandler(pageNumber: number) {
        this.props.setNewActivePageAC(pageNumber);
        this.props.setIsFetchingAC(true)
        Users_api.getUser(pageNumber).then(res => {
            const data = res.data
            this.props.setUsersFromServerAC(data.items, data.totalCount, data.error)
        }).finally(() => {
            this.props.setIsFetchingAC(false)
        })
    }

    render() {
        return <Users {...this.props}
                      onPageChangeHandler={this.onPageChangeHandler.bind(this)}/>;
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersReducer.items,
        activePage: state.usersReducer.activePage,
        pageSize: state.usersReducer.pageSize,
        totalCount: state.usersReducer.totalCount,
        isFetching: state.usersReducer.isFetching
    }
}

const mapDispatch = {
    changeFollowStatusAC,
    setUsersFromServerAC,
    setNewActivePageAC,
    setIsFetchingAC
}

export const UsersContainer = connect(mapStateToProps, mapDispatch)(SuperUserContainer)