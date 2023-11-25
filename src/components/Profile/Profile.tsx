import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


class Profile extends React.Component {
    render() {
        return (
            <div className={s.content}>
                <ProfileInfoContainer />
                {/*<div>*/}
                {/*    <img alt={'back not found'}*/}
                {/*         src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    ava + description*/}
                {/*</div>*/}
                <MyPostsContainer/>
            </div>
        )
    }
}


export default Profile;