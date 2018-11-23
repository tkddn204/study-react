import React from 'react';
import Logo from '../../Logo'

import classes from './Toolbar.css'

import NavigationItems from '../NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle
            clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;