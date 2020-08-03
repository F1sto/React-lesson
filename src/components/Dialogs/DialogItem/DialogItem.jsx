import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (<div className={classes.dialog}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ50PAJhgujPKk4EbIEREGx9uiPu2UOoiruJg&usqp=CAU' />
        <NavLink to={path}>{props.name}</NavLink>
    </div>);
}

export default DialogItem;