import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {T_PostsData} from "../../../data/data";

interface T_MyPosts {
    profilePage: {
        newValueForPost: string,
        postsData: T_PostsData[]
    }
    textAreaHandler: () => void
    onChangeFunc: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

interface I_Props {
    textValue: string
}


class MyPosts extends React.Component<T_MyPosts, I_Props> {


    render() {
        const {profilePage, textAreaHandler, onChangeFunc} = this.props

        return (
            <div>
                My posts
                <div>
                    <textarea value={profilePage.newValueForPost}
                              onChange={onChangeFunc}></textarea>
                    <button onClick={
                        textAreaHandler
                    }>Add post
                    </button>
                </div>
                <div className={s.posts}>
                    {profilePage.postsData.length ?
                        profilePage.postsData.map(post => <Post key={post.id} message={post.message}
                                                                likesCount={post.likesCount}/>)
                        : <div>Posts empty</div>}
                </div>
            </div>
        )
    }
}

export default MyPosts;