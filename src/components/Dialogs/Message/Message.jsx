import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {

    let messageImg;

    if (props.isMe === true) {
        messageImg = classes.myMessage;
    } else {
        messageImg = classes.hisMessage;
    }

    let hisMessage = messageImg + ' ' + classes.hisImg;
    let myMessage = messageImg + ' '+ classes.myImg;

    return (<div className={classes.message}>
        <div className={messageImg}>
            <img className={myMessage}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH4dcYWVFHFsz8M3Rsjpy2Hg6gQAmgbCIwWA&usqp=CAU'/>
            <p>{props.message}</p>
            <img className={hisMessage}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_CmEJNpMxtlxYJDIDhLGBCIqXEjt4zXyIug&usqp=CAU'/>
        </div>
    </div>);
}

export default Message;