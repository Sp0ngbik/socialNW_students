import {connect} from "react-redux";
import Navbar from "./Navbar";
import {RootState} from "../../data/redux/store";


const mapStateToProps = (state: RootState) => {
    return {
        dialogItems: state.dialogsReducer.dialogItems,
        userId: state.authReducer.data.id
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)