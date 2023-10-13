import React, {FC} from 'react';
import s from './Navbar.module.css';
import {NavLink, useLocation} from "react-router-dom";
import {T_DialogItems} from "../../data/data";

const Navbar: FC<{ dialogItems: T_DialogItems[] }> = (props) => {
    let firstUserMessage = `/message/${props.dialogItems[0].id}`
    const path = useLocation()
    return <nav className={s.nav}>
        <div>
            <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={'/profile'}>Profile</NavLink>
        </div>
        <div>
            <NavLink className={path.pathname.split('/')[1]==='message' ? s.item_active : s.item}
                     to={firstUserMessage}>Messages</NavLink>
        </div>
        <div>
            <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/news"}>News</NavLink>
        </div>
        <div>
            <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/music"}>Music</NavLink>
        </div>
        <div>
            <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/settings"}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;