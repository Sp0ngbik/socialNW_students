import React from "react";
import {T_ProfileContainer} from "./ProfileInfoContainer";

export class ProfileInfo extends React.Component<T_ProfileContainer> {
    render() {
        return <div>
            <img src={this.props.profileInfo?.photos.large} alt={'user not found'}/>
            <div>{this.props.profileInfo?.fullName}</div>
            <span>{this.props.profileInfo?.lookingForAJobDescription}</span>
        </div>;
    }
}