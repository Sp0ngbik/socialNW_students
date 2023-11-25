import {ChangeEvent} from "react";
import {ADD_POST, ON_CHANGE_POST_VALUE} from "../../../helpers/actionTypes";
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
        textAreaHandler: () => {
            dispatch({type: ADD_POST})
        },
        onChangeFunc: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch({type: ON_CHANGE_POST_VALUE, value: e.currentTarget.value})
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer