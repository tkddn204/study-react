import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem';


const navigationItems = () => (
    <ui className={classes.NavigationItems}>
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ui>
);

export default navigationItems;
