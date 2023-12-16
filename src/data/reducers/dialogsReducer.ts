import {T_DialogsInfo} from "../data";

const initialState: T_DialogsInfo = {
    messageData: [
        {id: crypto.randomUUID(), userId: '1', messages: 'hi'},
        {id: crypto.randomUUID(), userId: '1', messages: 'bye'},
        {id: crypto.randomUUID(), userId: '1', messages: 'welcome'},
        {id: crypto.randomUUID(), userId: '2', messages: 'again'},
        {id: crypto.randomUUID(), userId: '2', messages: 'alright'},
        {id: crypto.randomUUID(), userId: '3', messages: 'welcome'},
        {id: crypto.randomUUID(), userId: '3', messages: 'again'},
        {id: crypto.randomUUID(), userId: '4', messages: 'alright'},
        {id: crypto.randomUUID(), userId: '4', messages: 'welcome'},
        {id: crypto.randomUUID(), userId: '4', messages: 'again'},
        {id: crypto.randomUUID(), userId: '5', messages: 'alright'},
        {id: crypto.randomUUID(), userId: '5', messages: 'welcome'},
        {id: crypto.randomUUID(), userId: '5', messages: 'again'},
        {id: crypto.randomUUID(), userId: '5', messages: 'alright'},
    ],
    dialogItems: [
        {id: '1', name: 'Alexey'},
        {id: '2', name: 'Vlad'},
        {id: '3', name: 'Sasha'},
        {id: '4', name: 'Oleg'},
        {id: '5', name: 'Ivan'}
    ],
}

type T_AddNewMessage = ReturnType<typeof addNewMessageAC>
type T_MainDialogs =T_AddNewMessage

export const dialogsReducer = (state = initialState, action: T_MainDialogs) => {
    switch (action.type) {
        case "ADD_NEW_MESSAGE":
            const newMessage = {
                id: crypto.randomUUID(),
                userId: '1',
                messages: action.message
            }
            return {
                ...state, messageData: [...state.messageData, newMessage], newMessageTitle: ''
            }
        default:
            return state
    }
}


export const addNewMessageAC = (message: string) => {
    return {type: "ADD_NEW_MESSAGE",message} as const
}