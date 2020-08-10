import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (<div>
        <ProfileInfo />
        <MyPostsContainer store={props.store}
                // posts={props.profilePage.posts}
                // dispatch={props.dispatch}
                // newPostText = {props.profilePage.newPostText}
        />
    </div>);
}

export default Profile;