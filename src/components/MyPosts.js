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
                <Post message='Hello!' />
                <Post message='Welcome here ^^' />
            </div>
        </div>
    </div>);
}

export default MyPosts;