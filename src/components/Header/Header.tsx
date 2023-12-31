import React from 'react';
import s from './Header.module.css';
import {T_HeaderContainer} from "./HeaderContainer";

class Header extends React.Component <T_HeaderContainer> {
    render() {
        const {authState,setUserLogoutTC} = this.props
        return (
            <header className={s.header}>
                <div>
                    <img alt={'logo nf'} src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
                </div>
                <div className={s.loginBlock}>
                    {authState.data.isAuth ? <button onClick={setUserLogoutTC}>LogOut</button> : <button>Login</button>}
                </div>
            </header>
        );
    }
}

export default Header;