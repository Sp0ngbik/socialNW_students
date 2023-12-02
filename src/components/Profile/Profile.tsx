import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


class Profile extends React.Component {
    render() {
        return (
            <div className={s.content}>
                <ProfileInfoContainer />
                <MyPostsContainer/>
            </div>
        )
    }
}


export default Profile;