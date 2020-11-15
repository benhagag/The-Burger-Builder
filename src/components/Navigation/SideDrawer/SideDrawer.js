import React from 'react';
import classes from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            <Logo 
                height="11%" // setting the height as a property where we simply pass the percentage
            />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );

};

export default sideDrawer;