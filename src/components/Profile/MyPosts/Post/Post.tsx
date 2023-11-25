import React from 'react';
import s from './Post.module.css';

type T_Post = {
    message: string;
    likesCount: string
}

class Post extends React.Component<T_Post> {
    render() {
        const {message, likesCount} = this.props
        return (
            <div className={s.item}>
                <img alt={'ava not found'}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx6nyE6BtBUpxyikA6w1afyKRpCc1M38QrA&usqp=CAU'/>
                {message}
                <div>
                    <span>like</span> {likesCount}
                </div>
            </div>
        )
    }
}


export default Post;