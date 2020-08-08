import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import TopFriends from "./Friends/TopFriends";

const Sidebar = (props) => {

    let friendsList = props.friends.map(f => <TopFriends name={f.name} />);
    let settingsStyle = classes.item + ' ' + classes.settings;
    let friendsStyle = classes.item + ' ' + classes.friends;

    return (<div className={classes.sidebar}>
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={settingsStyle}>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={friendsStyle}>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
            </div>
            <div className={classes.friendList}>
                {friendsList}
            </div>
        </nav>
    </div>);
}

export default Sidebar;