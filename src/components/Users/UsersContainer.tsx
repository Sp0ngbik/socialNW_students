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
    followTC,
    unfollowTC,
    getUsersTC,
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatch))(SuperUserContainer)



