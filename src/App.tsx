import React from "react";
import {connect, Provider} from "react-redux";
import {reduxStore, RootState} from "./data/redux/store";
import Preloader from "./helpers/Preloader/Preloader";
import {getUserAuthTC} from "./data/reducers/auth_reducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {NavbarContainer} from "./components/Navbar/NavbarConainer";
import RoadMap from "./components/Roadmap/RoadMap";
import Notification from "./utils/Notification/Notification";
import {BrowserRouter} from "react-router-dom";

type T_AppContainer = {
    isInitialized: boolean,
    getUserAuthTC: () => void
}

class App extends React.Component<T_AppContainer> {
    componentDidMount() {
        this.props.getUserAuthTC()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return <div className='app-wrapper'>
            <div>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <RoadMap/>
                </div>
                <Notification/>
            </div>
        </div>
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

const AppContainer = connect(mapStateToProps, mapDispatchTP)(App)

 const MainApp = () => {
    return <BrowserRouter>
        <Provider store={reduxStore}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp