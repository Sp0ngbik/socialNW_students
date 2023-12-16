import React, {useEffect} from 'react';
import {toast, ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../data/redux/store";
import {setAppInformMessageAC, setAppStatusAC} from "../../data/reducers/app_reducer";

const Notification = () => {
    const dispatch = useDispatch()
    const appInfo = useSelector((state: RootState) => state.appReducer)

    useEffect(() => {
        if (appInfo.appInformMessage && appInfo.appStatus === 'failed') {
            toast.error(appInfo.appInformMessage)
        } else if (appInfo.appInformMessage && appInfo.appStatus === 'success') {
            toast.success(appInfo.appInformMessage)
        }
        toast.onChange(({status}) => {
            if (status === 'added') {
                dispatch(setAppStatusAC('idle'))
                dispatch(setAppInformMessageAC(''))

            }
        })
    }, [dispatch, appInfo]);

    return (
        <ToastContainer theme={'dark'} autoClose={1000}/>
    );
};

export default Notification;