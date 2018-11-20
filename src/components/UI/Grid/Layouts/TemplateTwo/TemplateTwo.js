import React from 'react'
import './TemplateTwo.css'

const TemplateTwo = (props) => (

    <div className="template-two-wrapper">
        <header >
        <nav className="navbar navbar-expand-lg navbar-light template-two-background" >
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
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </header>
        <main>
            <div className="container template-two-container">
                {props.children}
            </div>
        </main>
        <footer className="page-footer font-small blue template-two-footer" >
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
            </div>
        </footer>
    </div>
)

export default TemplateTwo;