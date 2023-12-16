import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {T_PostsData} from "../../../data/data";
import {useFormik} from "formik";

interface T_MyPosts {
    profilePage: {
        postsData: T_PostsData[]
    }
    textAreaHandler: (title: string) => void
}


function MyPosts(props: T_MyPosts) {
    const {profilePage, textAreaHandler} = props

    const postsFormik = useFormik({
        initialValues: {
            postTitle: ''
        },
        validate: (values) => {
            if (!values.postTitle) {
                return {postTitle: 'Required'}
            }
        },
        onSubmit: (values) => {
            textAreaHandler(values.postTitle)
        }
    })
    return (
        <div>
            My posts
            <div>
                <form onSubmit={postsFormik.handleSubmit}>
                    {postsFormik.errors.postTitle&&<div>{postsFormik.errors.postTitle}</div>}
                    <input
                        {...postsFormik.getFieldProps('postTitle')}
                    ></input>
                    <button disabled={!!postsFormik.errors.postTitle} type={'submit'}>Add post
                    </button>
                </form>
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

export default MyPosts;