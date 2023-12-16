import {AppDispatch} from "../../data/redux/store";
import {AxiosResponse, isAxiosError} from "axios";
import {setAppInformMessageAC, setAppStatusAC} from "../../data/reducers/app_reducer";

export const localError = (dispatch: AppDispatch, err: AxiosResponse) => {
    dispatch(setAppStatusAC('failed'))
    dispatch(setAppInformMessageAC(err.data.messages[0]))
}