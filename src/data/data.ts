export type T_Data = {
    dialogsInfo: T_DialogsInfo
    postsData: T_PostsData[]
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
export const data: T_Data = {
    dialogsInfo: {
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
        ]
    },
    postsData: [
        {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
        {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
        {message: 'title message', likesCount: '5', id: crypto.randomUUID()},
    ]
}

export const addPost = (title: string) => {
    const newPost = {
        message: title, likesCount: '0', id: crypto.randomUUID()
    }
    data.postsData.push(newPost)
}