import React from 'react';
import {NavLink} from "react-router-dom";
import s from './dialogs.module.css'
import {T_DialogItems} from "../../data/data";
import {T_DialogProps} from "./DialogsContainer";
import {useFormik} from "formik";


class DialogItem extends React.Component<T_DialogItems> {

    render() {
        const {id, name} = this.props
        return <NavLink className={({isActive}) => isActive ? s.user_active : s.user}
                        to={`/message/${id}`}>{name}</NavLink>
    }
}


function Dialogs(props: T_DialogProps) {
    const {dialogsInfo, addMessage} = props
    const dialogFormik = useFormik({
        initialValues: {
            dialogTitle: '',
        },
        validate: (values) => {
            if (!values.dialogTitle.trim()) {
                return {dialogTitle: 'Required!!!!'}
            }else if(values.dialogTitle.trim().length>=10){
                return {dialogTitle:'Long message'}
            }
        },
        onSubmit: (values) => {
            addMessage(values.dialogTitle)
            dialogFormik.resetForm()
        }
    })

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
                {dialogFormik.errors.dialogTitle && <div>{dialogFormik.errors.dialogTitle}</div>}
                <form onSubmit={dialogFormik.handleSubmit}>
                    <input
                        placeholder={'type your message'}
                        {...dialogFormik.getFieldProps('dialogTitle')}
                    />
                    <button disabled={!!dialogFormik.errors.dialogTitle} type={'submit'}
                    >Add message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default (Dialogs);

