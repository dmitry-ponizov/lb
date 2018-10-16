import React from 'react';
import './Toolbar.scss'
import NavigationItems from '../../MainNavigation/NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Logo from '../Logo/Logo';


const toolbar = (props) => (
    <header className="Toolbar">
        <nav className={"navbar navbar-expand-lg navbar-light bg-light navbarBorder"}>
            <Logo />
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;
