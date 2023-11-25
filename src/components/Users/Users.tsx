import React from "react";
import {T_UserContainer} from "./UsersContainer";
import preloader from '../../assets/images/Image20231125132435.gif'
import style from './user.module.css'
import defaultPhoto from '../../assets/images/Image20231118135624.jpg'
import {NavLink} from "react-router-dom";

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
        const {users, changeFollowStatusAC, onPageChangeHandler} = this.props
        const pages: number[] = []
        // const pageCounter = Math.ceil(totalCount / pageSize)

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
        return this.props.isFetching ? <img alt={'preloader not found'}
                                            src={preloader}/> :
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
                            {u.followed ?
                                <button onClick={() => changeFollowStatusAC(u.id, !u.followed)}>Follow</button> :
                                <button onClick={() => changeFollowStatusAC(u.id, !u.followed)}>Unfollow</button>}
                        </NavLink>
                    </div>
                ))}
            </div>
    }
}

export default Users;