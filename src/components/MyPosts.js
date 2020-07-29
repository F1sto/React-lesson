import React from 'react';
import classes from '../components-style/MyPosts.module.css';
import Post from './Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hello', likesCount: '23'},
        {id: 2, message: 'Welcome here ^^', likesCount: '1'},

    ]

    return (<div>
        <div>
            Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.psots}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    </div>);
}

export default MyPosts;