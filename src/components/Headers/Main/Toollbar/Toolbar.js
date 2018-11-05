import React from 'react';
import './Toolbar.scss'
import Logo from '../Logo/Logo';
import NavigationItem from '../../../UI/NavigationItem/NavigationItem'
import Aux from '../../../../hoc/Aux/Aux'
import { connect } from 'react-redux'

const toolbar = (props) => (
    <header className="Toolbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-header">
             <Logo />
             </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Explore
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">About</a>
                        <a className="dropdown-item" href="/">Features</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Prices</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Templates</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Support
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">How To</a>
                        <a className="dropdown-item" href="/">FAQ</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                </ul>
                <div id="login-links">
                {!props.isAuth 
                    ? <Aux>
                      <NavigationItem link="/registration">Sign Up</NavigationItem>
                      <NavigationItem link="/login">Login</NavigationItem></Aux> 
                    : <NavigationItem link="/logout">Logout</NavigationItem> }
                </div>
            </div>
        </nav>
    </header>
)

const mapStateToProps = state => {
    return {
      isAuth: state.auth.token !==  null
    }
}
export default connect(mapStateToProps, null)(toolbar);
