import {connect} from "react-redux";
import Navbar from "./Navbar";
import {RootState} from "../../data/redux/store";


const mapStateToProps = (state: RootState) => {
    return {
        dialogItems: state.dialogsReducer.dialogItems
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)