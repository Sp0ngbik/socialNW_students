import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {FC} from "react";
import {T_Data} from "../../data/data";


const RoadMap: FC<{ data: T_Data, addPost: (title: string) => void }> = (props) => {
    return <Routes>
        <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
        <Route path={'/profile'} element={<Profile postData={props.data.postsData} addPost={props.addPost}/>}/>
        <Route path={'/message/:id'}
               element={<Dialogs dialogsInfo={props.data.dialogsInfo}/>}/>
        {/*<Route path={'/news'} caseSensitive={false} element={<News/>}/>*/}
        {/*<Route path={'/music'} caseSensitive={false} element={<Music/>}/>*/}
        {/*<Route path={'/settings'} caseSensitive={false} element={<Settings/>}/>*/}
        <Route path={'/*'} element={<div>Error 404</div>}/>
    </Routes>
}
export default RoadMap;