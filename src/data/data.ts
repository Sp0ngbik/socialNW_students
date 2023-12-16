import {profilePageReducer, T_MainProfile} from "./reducers/profilePageReducer";

export type T_Data = {
    dialogsInfo: T_DialogsInfo
    // profilePage: T_ProfilePage
}




export type T_MainDispatch = T_MainProfile
export type T_Store = {
    _data: T_Data,
    getData: () => T_Data
    subscribe: (observer: (state: T_Data) => void) => void
    dispatch: (action: T_MainDispatch) => void,
    _callSubscriber: (state: T_Data) => void
}
export type T_MessageData = {
    id: string, userId: string, messages: string
}
export  type T_DialogItems = {
    id: string, name: string
}
export type T_PostsData = {
    message: string, likesCount: string, id: string
}
export type T_DialogsInfo = {
    messageData: T_MessageData[],
    dialogItems: T_DialogItems[]
}

// export const store: T_Store = {
//     _data: {
//         dialogsInfo: {
//             messageData: [
//                 {id: crypto.randomUUID(), userId: '1', messages: 'hi'},
//                 {id: crypto.randomUUID(), userId: '1', messages: 'bye'},
//                 {id: crypto.randomUUID(), userId: '1', messages: 'welcome'},
//                 {id: crypto.randomUUID(), userId: '2', messages: 'again'},
//                 {id: crypto.randomUUID(), userId: '2', messages: 'alright'},
//                 {id: crypto.randomUUID(), userId: '3', messages: 'welcome'},
//                 {id: crypto.randomUUID(), userId: '3', messages: 'again'},
//                 {id: crypto.randomUUID(), userId: '4', messages: 'alright'},
//                 {id: crypto.randomUUID(), userId: '4', messages: 'welcome'},
//                 {id: crypto.randomUUID(), userId: '4', messages: 'again'},
//                 {id: crypto.randomUUID(), userId: '5', messages: 'alright'},
//                 {id: crypto.randomUUID(), userId: '5', messages: 'welcome'},
//                 {id: crypto.randomUUID(), userId: '5', messages: 'again'},
//                 {id: crypto.randomUUID(), userId: '5', messages: 'alright'},
//             ],
//             dialogItems: [
//                 {id: '1', name: 'Alexey'},
//                 {id: '2', name: 'Vlad'},
//                 {id: '3', name: 'Sasha'},
//                 {id: '4', name: 'Oleg'},
//                 {id: '5', name: 'Ivan'}
//             ]
//         },
//         profilePage: {
//             newValueForPost: '',
//             postsData: [
//                 {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
//                 {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
//                 {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
//             ]
//         }
//     },
//     dispatch(action: T_MainDispatch) {
//         this._data.profilePage = profilePageReducer(this._data.profilePage, action)
//         this._callSubscriber(this._data)
//     }
//     ,
//     getData() {
//         return this._data
//     },
//     _callSubscriber(state: T_Data) {
//     },
//     subscribe(observer: (state: T_Data) => void) {
//         this._callSubscriber = observer
//     },
// }


