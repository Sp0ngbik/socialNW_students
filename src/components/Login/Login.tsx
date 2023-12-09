import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {setUserLoginTC} from "../../data/reducers/auth_reducer";
import {RootState} from "../../data/redux/store";
import {T_LoginData} from "../../api/auth_api";

export type T_LoginContainer = {
    setUserLoginTC: (data: T_LoginData) => void,
    isAuth: boolean,
    userId: number | null
}

const Login: React.FC<T_LoginContainer> = (props) => {
    return (
        <div>
            <LoginForm {...props}/>
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        isAuth: state.authReducer.data.isAuth,
        userId: state.authReducer.data.id
    }
}
const mapDispatchToProps = {
    setUserLoginTC
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);