import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {T_DialogItems} from "../../data/data";

interface I_NavBarProps {
    dialogItems: T_DialogItems[]
    userId: number | null
}


class Navbar extends React.Component<I_NavBarProps> {
    render() {
        const {dialogItems, userId = 2} = this.props
        let firstUserMessage = `/message/${dialogItems[0].id}`
        return <nav className={s.nav}>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                         to={`/profile/${userId}`}>Profile</NavLink>
            </div>
            <div>
                <NavLink
                    className={({isActive}) => isActive ? s.item_active : s.item}
                    to={firstUserMessage}>Messages</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/news"}>News</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/music"}>Music</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                         to={"/settings"}>Settings</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/users"}>Users</NavLink>
            </div>
        </nav>
    }
}


export default (Navbar);