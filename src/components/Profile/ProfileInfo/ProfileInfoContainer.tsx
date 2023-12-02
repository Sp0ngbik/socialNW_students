import React from "react";
import {Profile_api} from "../../../api/profiile_api";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {RootState} from "../../../data/redux/store";
import {setUserInfoAC, T_ProfileInfo} from "../../../data/reducers/profilePageReducer";
import {withRouterHOC} from "../../../hoc/withRouter";
import {withRedirectHOC} from "../../../hoc/withAuthRedirectHOC";
import {compose} from "redux";

export type T_ProfileContainer = {
    profileInfo: T_ProfileInfo | null,
    setUserInfoAC: (userInfo: T_ProfileInfo) => void
    id?: string
}

class ProfileInfoContainer extends React.Component <T_ProfileContainer> {
    componentDidMount() {
        this.props.id &&
        Profile_api.getUserInfo(Number(this.props.id)).then(res => this.props.setUserInfoAC(res.data))
    }

    render() {
        return <ProfileInfo {...this.props}/>;
    }
}


const mapStateToProps = (state: RootState) => {
    return {
        profileInfo: state.profilePageReducer.profileInfo
    }
}

const mapDispatchToProps =
    {setUserInfoAC}

export default compose<React.ComponentType>
(
    withRouterHOC,
    withRedirectHOC,
    connect(mapStateToProps, mapDispatchToProps)
)
(ProfileInfoContainer)