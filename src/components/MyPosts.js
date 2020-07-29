import React from 'react';
import classes from '../components-style/MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
    return (<div>
        <div>
            Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.psots}>
                <Post message='Hello!' likeCount='23' />
                <Post message='Welcome here ^^' likeCount='1' />
            </div>
        </div>
    </div>);
}

export default MyPosts;