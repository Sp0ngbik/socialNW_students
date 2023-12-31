import React from "react";
import {T_UserContainer} from "./UsersContainer";
import style from './user.module.css'
import defaultPhoto from '../../assets/images/Image20231118135624.jpg'
import {NavLink} from "react-router-dom";
import Preloader from "../../helpers/Preloader/Preloader";

type T_UsersProps = {
    onPageChangeHandler: (pageNumber: number) => void
}
type T_StateUsers = {
    maxCurrentPage: number,
    minCurrentPage: number,
    step: number
}

class Users extends React.Component<T_UserContainer & T_UsersProps, T_StateUsers> {

    constructor(props: T_UserContainer & T_UsersProps) {
        super(props);
        this.state = {
            maxCurrentPage: 10,
            minCurrentPage: 1,
            step: 5
        }
    }

    render() {
        console.log('RENDER USER')
        const {users, followTC, unfollowTC, onPageChangeHandler} = this.props
        const pages: number[] = []

        for (let i = this.state.minCurrentPage; i <= this.state.maxCurrentPage; i++) {
            pages.push(i)
        }
        const nextPagesUsers = (isDirection: boolean) => {
            if (isDirection) {
                this.setState((state) => ({
                    minCurrentPage: state.minCurrentPage + state.step,
                    maxCurrentPage: state.maxCurrentPage + state.step
                }))
            } else {
                this.state.minCurrentPage > this.state.step &&
                this.setState((state) => ({
                    minCurrentPage: state.minCurrentPage - state.step,
                    maxCurrentPage: state.maxCurrentPage - state.step
                }))
            }
        }
        return this.props.isFetching ? <Preloader/> :
            <div>
                <div>
                    <button onClick={() => nextPagesUsers(false)}>{'<'}</button>
                    {pages.map(el => {
                        return <button key={el} onClick={() => onPageChangeHandler(el)}>{el}</button>

                    })}
                    <button onClick={() => nextPagesUsers(true)}>{'>'}</button>
                </div>
                {users.map(u => (
                    <div key={u.id} className={style.user}>
                        <NavLink to={`/profile/${u.id}`}>
                            <h3>{u.name}</h3>
                            <div>
                                <img src={u.photos.small || defaultPhoto} alt={'userAva not found'}/>
                            </div>
                        </NavLink>
                        {!u.followed ?
                            <button onClick={() => followTC(u.id)}>Follow</button> :
                            <button onClick={() => unfollowTC(u.id)}>Unfollow</button>}
                    </div>
                ))}
            </div>
    }
}

export default Users;