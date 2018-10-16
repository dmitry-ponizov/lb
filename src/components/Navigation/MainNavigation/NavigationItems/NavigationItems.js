import React from 'react'
import './NavigationItems.scss'
import NavigationItem from '../NavigationItem/NavigationItem'

const navigationItems = (props) => {

    return (
     <div className={"collapse navbar-collapse"} >
        <ul className={"navbar-nav mr-auto"}>
          <li className={"nav-item dropdown"}>
          <a className={"nav-link dropdown-toggle"} href="#" > Explore <span className="caret"></span></a>
            <ul className={"dropdown-menu"} aria-labelledby="navbarDropdown1">
              <li><a href='about.html'>About</a></li>
              <li><a href='features.html'>Features</a></li>
              <li><a href='prices.html'>Prices</a></li>
            </ul>
          </li>
          <li className={"nav-item"}>
            <a className={"nav-link"} href="#" >Templates</a>
          </li>
          <li className={"nav-item dropdown"}>
            <a className={"nav-link"} id="navbarDropdown2" data-target="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Support <span className={"caret"}></span><span className="caret"></span>
            </a>
            <ul className={"dropdown-menu"} aria-labelledby="navbarDropdown2">
              <li>
                <a href='#'>How To</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
            </ul>
          </li>
          <li className={"nav-item"}>
            <a className={"nav-link"} href="contact.html">Contact</a>
          </li>
        </ul>
        <div className={"my-2 my-lg-0 login-links"}>
           <NavigationItem link="/registration">Sign Up</NavigationItem>
           <NavigationItem link="/login">Login</NavigationItem>
        </div>
      </div>
    )

}

export default navigationItems;