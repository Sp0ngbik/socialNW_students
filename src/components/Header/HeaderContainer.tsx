import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../data/redux/store";
import { T_DataMe} from "../../data/reducers/auth_reducer";

export type T_HeaderContainer = {
    authState: T_DataMe
}

class HeaderContainer extends React.Component<T_HeaderContainer> {


    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        authState: state.authReducer
    }
}


export default connect(mapStateToProps)(HeaderContainer)