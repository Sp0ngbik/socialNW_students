import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import DialogsContainer from "../Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";


const RoadMap = () => {
    return <Routes>
        <Route path={'/'} element={<Navigate to={'/profile/2'}/>}/>
        <Route path={'/profile/:id'} element={<Profile/>}/>
        <Route path={'/message/:id'}
               element={<DialogsContainer/>}/>
        <Route path={'/users'} element={<UsersContainer/>}/>
        <Route path={'/music'} element={<div>Music</div>}/>
        <Route path={'/*'} element={<div>Error 404</div>}/>
    </Routes>
}
export default RoadMap;