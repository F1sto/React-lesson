import React from 'react';
import classes from '../components-style/Sidebar.module.css';

// let activeItem = `${classes.item} ${classes.active}`;

const Sidebar = () => {
    return (<nav className={classes.nav}>
        <div className={classes.item}><a>Profile</a></div>
        <div className={`${classes.item} ${classes.active}`}><a>Messages</a></div>
        <div className={classes.item}><a>News</a></div>
        <div className={classes.item}><a>Music</a></div>
        <div className={classes.item}><a>Settings</a></div>
    </nav>);
}

export default Sidebar;