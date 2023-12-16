import {ADD_POST} from "../../../helpers/actionTypes";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../../data/redux/store";

const mapStateToProps = (state: RootState) => {
    return {
        profilePage: state.profilePageReducer
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        textAreaHandler: (title:string) => {
            dispatch({type: ADD_POST,title})
        },

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer