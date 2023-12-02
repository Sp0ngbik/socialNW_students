import {RootState} from "../data/redux/store";
import {connect} from "react-redux";
import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state: RootState) => {
    return {isAuth: state.authReducer.data.isAuth}
}
export const withRedirectHOC = <T, >(Component: ComponentType<T>) => {
    const RedirectComponent = (props: { isAuth: boolean }) => {
        const {isAuth, ...restProps} = props
        if(!isAuth){
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T & {}}/>
    }

    return connect(mapStateToProps)(RedirectComponent)


}