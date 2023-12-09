import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../data/redux/store";
import {addNewMessageAC, changeNewMessageAC} from "../../data/reducers/dialogsReducer";
import {T_DialogsInfo} from "../../data/data";
import {compose} from "redux";
import {withRedirectHOC} from "../../hoc/withAuthRedirectHOC";


type T_MapDispatchToProps = {
    changeNewMessage: (message: string) => void,
    addMessage: () => void
}

type T_MapStateToProps = {
    dialogsInfo: T_DialogsInfo
}

export type T_DialogProps = T_MapStateToProps & T_MapDispatchToProps

const mapStateToProps = (state: RootState): T_MapStateToProps => {
    return {
        dialogsInfo: state.dialogsReducer
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): T_MapDispatchToProps => {
    return {
        changeNewMessage(newMessage: string) {
            dispatch(changeNewMessageAC(newMessage))
        },
        addMessage() {
            dispatch(addNewMessageAC())
        }
    }
}



// export default DialogsContainer;


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirectHOC
)(Dialogs)