import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (<div>
        <h3>Posts</h3>
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={ addPost }>Add post</button>
        </div>
        <div className={classes.psots}>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;