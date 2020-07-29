import React from 'react';
import classes from '../components-style/Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Lada'},
        {id: 2, name: 'BMW'},
        {id: 3, name: 'Mersedes'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hey!'},
        {id: 3, message: 'How are you ?'},
    ]

    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        </div>
        <div className={classes.messages}>
           <Message message={messagesData[0].message} />
           <Message message={messagesData[1].message} />
           <Message message={messagesData[2].message} />
        </div>
    </div>)
}

export default Dialogs;