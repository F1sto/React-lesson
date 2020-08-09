import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));

    }

    return (<div>
        <h3>Posts</h3>
        <div>
            <textarea ref={newPostElement} onChange={onPostChange}
                      value={props.newPostText}/>
            <button onClick={ addPost }>Add post</button>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;