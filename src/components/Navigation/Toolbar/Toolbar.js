import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigaitonItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawToggleClicked}/>
        <div className={classes.Logo}> 
            <Logo />
        </div>
        
        <nav className={classes.DesktopOnly}>
            <NavigaitonItems /> 
        </nav>
    </header>

);

export default toolbar;