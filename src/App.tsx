import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import RoadMap from "./components/Roadmap/RoadMap";
import {NavbarContainer} from "./components/Navbar/NavbarConainer";

class App extends React.Component {
    render() {
        return <div className='app-wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <RoadMap/>
            </div>
        </div>;
    }
}

export default App;
