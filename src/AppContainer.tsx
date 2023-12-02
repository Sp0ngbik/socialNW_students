import React from "react";
import App from "./App";
import {connect} from "react-redux";
import {RootState} from "./data/redux/store";
import Preloader from "./helpers/Preloader/Preloader";
import {getUserAuthTC} from "./data/reducers/auth_reducer";

type T_AppContainer = {
    isInitialized: boolean,
    getUserAuthTC: () => void
}

class AppContainer extends React.Component<T_AppContainer> {
    componentDidMount() {
        this.props.getUserAuthTC()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return <App {...this.props}/>
    }
}

const mapDispatchTP = {
    getUserAuthTC
}
const mapStateToProps = (
    state: RootState
) => {
    return {
        isInitialized: state.appReducer.initialized
    }
}

export default connect(mapStateToProps, mapDispatchTP)(AppContainer)