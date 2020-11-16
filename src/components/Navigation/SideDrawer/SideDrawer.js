import React from 'react';
import classes from './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../HOC/Auxiliary';

const sideDrawer = (props) => {
    
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxiliary>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            {/* We have Logo class in 3 different files but due css modules, this is actually converted to 3 different css classes so that they don't interfere */}
            <div className={classes.Logo}>
                <Logo />
            </div>
            
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Auxiliary>
    );

};

export default sideDrawer;