import React from 'react';
import './App.css';
import RoadMap from "./components/Roadmap/RoadMap";
import {NavbarContainer} from "./components/Navbar/NavbarConainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Notification from "./utils/Notification/Notification";

class App extends React.Component {
    render() {
        return <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <RoadMap/>
            </div>
            <Notification/>
        </div>;
    }
}

export default App;
