import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import DialogsContainer from "../Dialogs/DialogsContainer";
import SuperUserContainer from "../Users/UsersContainer";
import React from "react";


const RoadMap = () => {
    return <Routes>
        <Route path={'/'} element={<Navigate to={'/profile/2'}/>}/>
        <Route path={'/profile/:id'} element={<Profile/>}/>
        <Route path={'/message/:id'}
               element={<DialogsContainer/>}/>
        <Route path={'/users'} element={<SuperUserContainer/>}/>
        <Route path={'/music'} element={<div>Music</div>}/>
        <Route path={'/login'} element={<h3>Login</h3>}/>
        <Route path={'/*'} element={<div>Error 404</div>}/>
    </Routes>
}
export default RoadMap;