import React from 'react';
import {useFormik} from "formik";
import {T_LoginContainer} from "./Login";
import {Navigate} from "react-router-dom";


const LoginForm: React.FC<T_LoginContainer> = ({setUserLoginTC, isAuth, userId = 2}) => {
    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            if (!values.email) {
                return {email: 'REQUIRED'}
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                return {email: 'Invalid email address'}
            }
            if (!values.password) {
                return {password: 'Password is required'}
            }
        },
        onSubmit: (values) => {
            setUserLoginTC(values)
        }
    })

    if (isAuth) {
        return <Navigate to={`/profile/${userId}`}/>
    }

    return (
        <div>
            <form onSubmit={loginFormik.handleSubmit}>
                <div>
                    {loginFormik.errors.email && loginFormik.touched.email && <div>{loginFormik.errors.email}</div>}
                    <input placeholder={'Email'} type='email' {...loginFormik.getFieldProps('email')}/>
                </div>
                <div>
                    {loginFormik.errors.password && loginFormik.touched.password &&
                        <div>{loginFormik.errors.password}</div>}
                    <input placeholder={'Password'}
                           type='password'
                           {...loginFormik.getFieldProps('password')}/>
                </div>
                <div>
                    <input onChange={loginFormik.handleChange} name='rememberMe' type='checkbox'/>
                    <span>Remember me</span>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;