import {AppDispatch} from "../../data/redux/store";
import {isAxiosError} from "axios";
import {setAppInformMessageAC, setAppStatusAC} from "../../data/reducers/app_reducer";

export const networkError = (dispatch: AppDispatch, err: unknown) => {
    let errorMessage = 'Some error occurred'
    if (isAxiosError(err)) {
        errorMessage = err.response && err.response.data.messages[0]
    } else {
        errorMessage = (err as Error).message
    }
    dispatch(setAppStatusAC('failed'))
    dispatch(setAppInformMessageAC(errorMessage))
}