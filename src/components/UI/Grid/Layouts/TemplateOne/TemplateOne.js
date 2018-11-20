import React from 'react'
import './TemplateOne.css'

const TemplateOne = (props) => (
    <div className="template-one-wrapper">
        <header>
        <nav className="navbar navbar-expand-lg navbar-light template-one-background" >
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
        </header>
            <div className="container template-one-container">
                {props.children}
            </div>
        <footer className="page-footer font-small blue template-one-footer" >
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
            </div>
        </footer>
    </div>
)

export default TemplateOne;