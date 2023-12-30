import {Navigate, Route, Routes} from "react-router-dom";
// import Profile from "../Profile/Profile";
import DialogsContainer from "../Dialogs/DialogsContainer";
import SuperUserContainer from "../Users/UsersContainer";
import React, {Suspense} from "react";
import Login from "../Login/Login";
import {useSelector} from "react-redux";
import {RootState} from "../../data/redux/store";

const Profile = React.lazy(() => import('../Profile/Profile'))

const RoadMap = () => {
    const userIdSelector = useSelector<RootState>(state => state.authReducer.data.id)
    return <Routes>
        <Route path={'/'} element={<Navigate to={`/profile/${userIdSelector}`}/>}/>
        <Route path={'/profile/:id'} element={<Suspense fallback={<div>Loading</div>}><Profile/></Suspense>}/>
        <Route path={'/message/:id'} element={<DialogsContainer/>}/>
        <Route path={'/users'} element={<SuperUserContainer/>}/>
        <Route path={'/music'} element={<div>Music</div>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/*'} element={<div>Error 404</div>}/>
    </Routes>
}
export default RoadMap;