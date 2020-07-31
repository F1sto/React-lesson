import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (<div>
        <h3>Posts</h3>
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={classes.psots}>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;