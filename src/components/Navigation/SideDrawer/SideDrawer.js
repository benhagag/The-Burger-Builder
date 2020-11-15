import React from 'react';
import classes from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            {/* We have Logo class in 3 different files but due css modules, this is actually converted to 3 different css classes so that they don't interfere */}
            <div className={classes.Logo}>
                <Logo />
            </div>
            
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );

};

export default sideDrawer;