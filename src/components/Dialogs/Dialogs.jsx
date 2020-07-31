import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    // map преобразует массив messages в массив messagesElements (перебор )
    // без этого метода массива отрисовка сообщений выглядит так:
    // <Message message={messages[0].message} />
    // <Message message={messages[1].message} />
    // <Message message={messages[2].message} />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>);
}

export default Dialogs;