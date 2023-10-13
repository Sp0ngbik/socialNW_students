import React, {FC} from 'react';
import {NavLink, useParams} from "react-router-dom";
import s from './dialogs.module.css'
import {T_DialogItems, T_DialogsInfo} from "../../data/data";

type T_Params = {
    id: string
}
const DialogItem = (props: T_DialogItems) => {
    return <NavLink className={({isActive}) => isActive ? s.user_active : s.user}
                    to={`/message/${props.id}`}>{props.name}</NavLink>
}

const Dialogs: FC<{ dialogsInfo: T_DialogsInfo }> = (props) => {
    const params = useParams<T_Params>()
    const filteredMessagesFromUserId = props.dialogsInfo.messageData.filter(el => el.userId === params.id).map(el =>
        <li key={el.id}>{el.messages}</li>)
    return (
        <div className={s.user_dialog}>
            <div className={s.users}>
                {props.dialogsInfo.dialogItems.length ?
                    props.dialogsInfo.dialogItems.map(item => <DialogItem key={item.id} id={item.id} name={item.name}/>)
                    : <div>Dialogs empty</div>}
            </div>
            <div className={s.dialog}>
                <ul>
                    {filteredMessagesFromUserId.length ?
                        filteredMessagesFromUserId
                        : <li>Dialog list empty</li>}
                </ul>
            </div>
        </div>
    );
};

export default Dialogs;