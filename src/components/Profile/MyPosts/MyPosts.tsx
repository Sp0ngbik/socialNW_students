import React, {FC, RefObject, useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {data, T_PostsData} from "../../../data/data";


const MyPosts: FC<{ postData: T_PostsData[], addPost: (title: string) => void }> = (props) => {
    const postRef: RefObject<HTMLTextAreaElement> = useRef(null)
    const textAreaHandler = () => {
        postRef.current && props.addPost(postRef.current.value)
    }
    return (
        <div>
            My posts
            <div>
                <textarea ref={postRef}></textarea>
                <button onClick={() => {
                    console.log(data)
                    textAreaHandler()
                }}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {props.postData.length ?
                    props.postData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)
                    : <div>Posts empty</div>}
            </div>
        </div>
    )
}

export default MyPosts;