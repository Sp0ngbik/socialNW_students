import {connect} from "react-redux";
import Users from "./Users";
import {RootState} from "../../data/redux/store";
import {
    followTC,
    getUsersTC,
    T_UserBody,
    unfollowTC,
} from "../../data/reducers/usersReducer";
import React from "react";
import {compose} from "redux";
import {
    getActivePage, getFake,
    getIsFetching,
    getPageSize, getSuperUsers,
    getTotalCount,
    getUsers
} from "../../data/reducers/selectors/userSelector";

export type T_UserContainer = {
    users: T_UserBody[],
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    getUsersTC: (pageNumber: number) => void
    activePage: number
    pageSize: number
    totalCount: number
    isFetching: boolean
}

class SuperUserContainer extends React.Component <T_UserContainer> {
    componentDidMount() {

        this.props.getUsersTC(this.props.activePage)
    }

    onPageChangeHandler(pageNumber: number) {
        this.props.getUsersTC(pageNumber)
    }

    render() {
        console.log('RENDER')
        return <Users {...this.props}
                      onPageChangeHandler={this.onPageChangeHandler.bind(this)}/>;
    }
}

const mapStateToProps = (state: RootState) => {
    console.log('MAP RENDERED')
    return {
        // users: getUsers(state),
        users: getSuperUsers(state),
        activePage: getActivePage(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        fake: getFake(state)
    }
}

const mapDispatch = {
    followTC,
    unfollowTC,
    getUsersTC,
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatch))(SuperUserContainer)



