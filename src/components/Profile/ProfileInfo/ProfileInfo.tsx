import React from "react";
import {T_ProfileContainer} from "./ProfileInfoContainer";
import {ProfileStatus} from "./ProfileStatus";

export class ProfileInfo extends React.Component<T_ProfileContainer> {
    render() {
        return <div>
            <img src={this.props.profileInfo?.photos.large} alt={'user not found'}/>
            <div>{this.props.profileInfo?.fullName}</div>
            <ProfileStatus status={this.props.profileStatus||'No status'} updateHandler = {this.props.updateStatusTC}/>
            <span>{this.props.profileInfo?.lookingForAJobDescription}</span>
        </div>;
    }
}