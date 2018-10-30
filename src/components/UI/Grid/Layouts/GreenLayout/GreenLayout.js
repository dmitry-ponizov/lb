import React from 'react'
import Aux from '../../../../../hoc/Aux/Aux'

const GreenLayout = (props) => (
    <Aux>
    <header >
    <nav className="navbar navbar-default" style={{background: 'lightgreen'}}>
        <div className="container-fluid">

            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Second layout</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li className="active"><a href="/">Link <span className="sr-only">(current)</span></a></li>
                <li><a href="/">Link</a></li>
                <li className="dropdown">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="/">Action</a></li>
                    <li><a href="/">Another action</a></li>
                    <li><a href="/">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/">One more separated link</a></li>
                </ul>
                </li>
            </ul>
            <form className="navbar-form navbar-left">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/">Link</a></li>
                <li className="dropdown">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="/">Action</a></li>
                    <li><a href="/">Another action</a></li>
                    <li><a href="/">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/">Separated link</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    <div>second layout</div>
    <div className="container">
        { props.children }
    </div>
    
         
  <footer className="page-footer font-small blue" style={{background: 'lightgreen'}}>
    <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
    </div>
 </footer>
</Aux>
) 

export default GreenLayout;