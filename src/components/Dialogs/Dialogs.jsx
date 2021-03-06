import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message isMe={m.isMe} message={m.message}/>);

    // map преобразует массив messages в массив messagesElements (перебор )
    // без этого метода массива отрисовка сообщений выглядит так:
    // <Message message={messages[0].message} />
    // <Message message={messages[1].message} />
    // <Message message={messages[2].message} />

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
       props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div></div> {/*for grid*/}
            <div className={classes.sendMessage}>
                <textarea ref={newMessageElement} onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText} />
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>);
}

export default Dialogs;