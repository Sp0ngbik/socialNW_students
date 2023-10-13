import React, {FC} from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import {T_PostsData} from "../../data/data";

const Profile: FC<{ postData: T_PostsData[], addPost: (title: string) => void }> = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img alt={'back not found'}
                     src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts addPost={props.addPost} postData={props.postData}/>
        </div>
    )
}

export default Profile;