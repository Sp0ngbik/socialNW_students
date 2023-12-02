const AppReducerInitialState = {
    initialized: false

}
export type AppReducerInitialStateType = {
    initialized: boolean
}
export type AppActionsType = InitializedSuccessACACType

export const app_reducer = (state: AppReducerInitialStateType = AppReducerInitialState, action: AppActionsType): AppReducerInitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}


type InitializedSuccessACACType = ReturnType<typeof initializedSuccessAC>

export const initializedSuccessAC = () => {
    return {
        type: 'SET-INITIALIZED',
    } as const
}