import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (<div className={classes.item}>
            <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/18/10/avatar.jpg'/>
            {props.message}
            <div>
                <span>Like </span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;