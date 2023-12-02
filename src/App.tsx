import React from 'react';
import './App.css';
import RoadMap from "./components/Roadmap/RoadMap";
import {NavbarContainer} from "./components/Navbar/NavbarConainer";
import HeaderContainer from "./components/Header/HeaderContainer";

class App extends React.Component {
    render() {
        return <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <RoadMap/>
            </div>
        </div>;
    }
}

export default App;
