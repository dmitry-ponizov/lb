import React, { Component } from 'react'


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
                <button id="select-template" className="btn btn-secondary dropdown-toggle"  onClick={this.openHandler} >
                { this.props.selected ? this.props.selected : 'Select template'}
                </button>
                <div  className={'dropdown-menu' + (this.state.open ? ' show' : '')} >
                     {this.props.options.map((option, index) => (
                        <a  key={index} href="/" className="dropdown-item" onClick={this.clickHanlder}>{ option }</a>
                    ))}
                </div>
            </div>
        )
    }
}

export default Dropdown;