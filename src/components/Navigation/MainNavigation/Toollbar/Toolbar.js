import React from 'react';
import './Toolbar.scss'
import Logo from '../Logo/Logo';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import NavigationItem from '../../../UI/NavigationItem/NavigationItem'
import Aux from '../../../../hoc/Aux/Aux'
import { connect } from 'react-redux'

const toolbar = (props) => (
    <header className="Toolbar">
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavDropdown eventKey={3} title="Explore" id="basic-nav-dropdown">
                        <NavigationItem link="/about">About</NavigationItem>
                        <NavigationItem link="/features">Features</NavigationItem>
                        <NavigationItem link="/prices">Prices</NavigationItem>
                    </NavDropdown>
                    <NavigationItem link="/templates">Templates</NavigationItem>
                    <NavDropdown eventKey={3} title="Support" id="basic-nav-dropdown">
                        <NavigationItem link="/how">How To</NavigationItem>
                        <NavigationItem link="/faq">FAQ</NavigationItem>
                    </NavDropdown>
                    <NavigationItem link="/contact">Contact</NavigationItem>
                </Nav>
                <Nav pullRight id="login-links">
                    {!props.isAuth 
                    ? <Aux>
                      <NavigationItem link="/registration">Sign Up</NavigationItem>
                      <NavigationItem link="/login">Login</NavigationItem></Aux> 
                    : <NavigationItem link="/logout">Logout</NavigationItem> }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
)

const mapStateToProps = state => {
    return {
      isAuth: state.auth.token !==  null
    }
}
export default connect(mapStateToProps, null)(toolbar);
