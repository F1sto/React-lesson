import React from 'react';
import classes from '../components-style/Post.module.css';

const Post = (props) => {
    return (<div>
        <div className={classes.item}>
            <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/18/10/avatar.jpg' />
            {props.message}
            <p><span>Like </span> {props.likesCount}</p>
        </div>
    </div>);
}

export default Post;