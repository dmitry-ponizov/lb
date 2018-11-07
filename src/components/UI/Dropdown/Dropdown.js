import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dropdown extends Component {

    state = {
        open: false
    }

    clickHanlder = e => {
        e.preventDefault()
        this.props.clickHandler(e.target.innerHTML);
        this.setState({ open: false })
    }

    openHandler = () => {
        this.setState(prevState => ({ 
            open: !prevState.open
        }))
    }

    render() {
        return(
            <div className={'dropdown' + (this.state.open ? ' show' : '')}>
                <button id="dropdown" className="btn btn-secondary dropdown-toggle"  onClick={this.openHandler} >
                { this.props.selected ? this.props.selected : this.props.title}
                </button>
                <div  className={'dropdown-menu' + (this.state.open ? ' show' : '')} >
                     {this.props.options.map((option, index) => (
                        <Link  key={index} to="/logout" className="dropdown-item" >
                        <i className="fa fa-sign-out"></i>
                        { option }</Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Dropdown;