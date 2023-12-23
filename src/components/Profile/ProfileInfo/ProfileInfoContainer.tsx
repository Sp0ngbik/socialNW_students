import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {RootState} from "../../../data/redux/store";
import {getUserInfoTC, getUserStatusTC, T_ProfileInfo, updateStatusTC} from "../../../data/reducers/profilePageReducer";
import {withRouterHOC} from "../../../hoc/withRouter";
import {withRedirectHOC} from "../../../hoc/withAuthRedirectHOC";
import {compose} from "redux";

export type T_ProfileContainer = {
    id?: string
    profileStatus: null | string,
    profileInfo: T_ProfileInfo | null,
    getUserInfoTC: (id: string) => void
    getUserStatusTC: (id: string) => void
    updateStatusTC: (status: string) => void
}

class ProfileInfoContainer extends React.Component <T_ProfileContainer> {
    componentDidMount() {
        if (this.props.id) {
            this.props.getUserInfoTC(this.props.id)
            this.props.getUserStatusTC(this.props.id)
        }
    }

    render() {
        return <ProfileInfo {...this.props}/>;
    }
}


const mapStateToProps = (state: RootState) => {
    return {
        profileInfo: state.profilePageReducer.profileInfo,
        profileStatus: state.profilePageReducer.status
    }
}

const mapDispatchToProps =
    {getUserInfoTC, getUserStatusTC, updateStatusTC}

export default compose<React.ComponentType>
(
    withRouterHOC,
    withRedirectHOC,
    connect(mapStateToProps, mapDispatchToProps)
)
(ProfileInfoContainer)