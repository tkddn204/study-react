import React from 'react';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem';


const navigationItems = (props) => (
    <ui className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        {props.isAuthenticated
            ? <NavigationItem link="/orders">Orders</NavigationItem>
            : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ui>
);

export default navigationItems;
