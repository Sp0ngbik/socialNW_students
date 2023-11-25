import React from "react";
import {Profile_api} from "../../../api/profiile_api";
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../../data/redux/store";
import {setUserInfoAC, T_ProfileInfo} from "../../../data/reducers/profilePageReducer";
import {withRouterHOC} from "../../../hoc/withRouter";

export type T_ProfileContainer = {
    profileInfo: T_ProfileInfo | null,
    setUserInfo: (userInfo: T_ProfileInfo) => void
    id?: string
}

class ProfileInfoContainer extends React.Component <T_ProfileContainer> {
    componentDidMount() {
        this.props.id &&
        Profile_api.getUserInfo(Number(this.props.id)).then(res => this.props.setUserInfo(res.data))
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

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setUserInfo: (userInfo: T_ProfileInfo) => dispatch(setUserInfoAC(userInfo))
    }
}

const WithRouter = withRouterHOC(ProfileInfoContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithRouter)