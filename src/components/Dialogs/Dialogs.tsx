import React, {ChangeEvent} from 'react';
import {NavLink} from "react-router-dom";
import s from './dialogs.module.css'
import {T_DialogItems} from "../../data/data";
import {T_DialogProps} from "./DialogsContainer";


class DialogItem extends React.Component<T_DialogItems> {
    render() {
        const {id, name} = this.props
        return <NavLink className={({isActive}) => isActive ? s.user_active : s.user}
                        to={`/message/${id}`}>{name}</NavLink>
    }
}


class Dialogs extends React.Component<T_DialogProps> {
    render() {
        const {dialogsInfo, changeNewMessage, addMessage} = this.props
        const changeNewMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
            changeNewMessage(e.currentTarget.value)
        }
        const onAddMessageHandler = () => {
            addMessage()
        }
        const filteredMessagesFromUserId = dialogsInfo.messageData.filter(el => el.userId === '1').map(el =>
            <li key={el.id}>{el.messages}</li>)
        return (
            <div className={s.user_dialog}>
                <div className={s.users}>
                    {dialogsInfo.dialogItems.length ?
                        dialogsInfo.dialogItems.map(item =>
                            <DialogItem key={item.id} id={item.id}
                                        name={item.name}/>)
                        : <div>Dialogs empty</div>}
                </div>
                <div className={s.dialog}>
                    <ul>
                        {filteredMessagesFromUserId.length ?
                            filteredMessagesFromUserId
                            : <li>Dialog list empty</li>}
                    </ul>
                    <input placeholder={'type your message'} onChange={changeNewMessageHandler}
                           value={dialogsInfo.newMessageTitle}/>
                    <button onClick={onAddMessageHandler}>Add message</button>
                </div>
            </div>
        );
    }
}

export default (Dialogs);