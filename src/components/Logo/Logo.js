import React from 'react';
import burgerLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div 
        className={classes.Logo} 
        style={{height: props.height}} // assign in dymanically via inline styles
    >
        <img src={burgerLogo} alt= "Gala's Burger"/>
    </div>
);

export default logo;