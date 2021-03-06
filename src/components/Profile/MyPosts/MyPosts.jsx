import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (<div>
        <h3>Posts</h3>
        <div>
            <textarea ref={newPostElement} onChange={onPostChange}
                      value={props.profilePage.newPostText}/>
            <button onClick={ onAddPost }>Add post</button>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;