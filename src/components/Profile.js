import React from 'react';
import classes from '../components-style/Profile.module.css';
import MyPosts from './MyPosts';

const Profile = () => {
    return(<div>
        <div>
            <img className='img' src='https://bgfons.com/uploads/city/city_texture6420.jpg' />
        </div>
        <div className={classes.userProfile}>
            <img src='https://img1.goodfon.com/wallpaper/nbig/4/41/star-wars-darth-vader-maska.jpg' />
            <div className={classes.userDescription}>
                <p className={classes.item}>Name</p>
                <p className={classes.item}>Age</p>
                <p className={classes.item}>Info</p>
            </div>
        </div>
        <MyPosts />
    </div>);
}

export default Profile;