export type T_AppStatus = 'success' | 'failed' | 'idle'

export type AppReducerInitialStateType = {
    initialized: boolean
    appStatus: T_AppStatus
    appInformMessage: string
}

const appReducerInitialState: AppReducerInitialStateType = {
    initialized: false,
    appStatus: 'idle',
    appInformMessage: ''

}
export type AppActionsType = InitializedSuccessACType | appStatusType | InitializedSuccessACACType

export const app_reducer = (state = appReducerInitialState, action: AppActionsType): AppReducerInitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {...state, initialized: true}
        }
        case "SET_APP_MESSAGE": {
            return {...state, appInformMessage: action.message}
        }
        case "SET_APP_STATUS": {
            return {...state, appStatus: action.status}
        }
        default:
            return state
    }
}


type InitializedSuccessACType = ReturnType<typeof initializedSuccessAC>
type appStatusType = ReturnType<typeof setAppStatusAC>
type InitializedSuccessACACType = ReturnType<typeof setAppInformMessageAC>

export const initializedSuccessAC = () => {
    return {
        type: 'SET-INITIALIZED',
    } as const
}

export const setAppStatusAC = (status: T_AppStatus) => {
    return {
        type: "SET_APP_STATUS",
        status
    } as const
}
export const setAppInformMessageAC = (message: string) => {
    return {
        type: "SET_APP_MESSAGE",
        message
    } as const
}