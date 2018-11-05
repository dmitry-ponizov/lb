import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Logout extends Component {
    
    render() {
        return (
            <div className="builder-header-btn">
                <div  className="builder-header-container">
                    
                    <Link to="/logout" className="full-size">
                    <i className="fa fa-sign-out"></i>
                    Logout</Link>
                </div>
            </div>
        )
    }
}


export default Logout;