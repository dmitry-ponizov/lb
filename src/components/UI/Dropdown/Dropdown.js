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
                <button className="btn btn-secondary dropdown-toggle"  onClick={this.openHandler} >
                { this.props.selected ? this.props.selected : 'Select template'}
                </button>
                <div  className={'dropdown-menu' + (this.state.open ? ' show' : '')} >
                     {this.props.options.map((option, index) => (
                        <a  key={index} href="/" className="dropdown-item" onClick={this.clickHanlder}>{ option }</a>
                    ))}
                </div>
            </div>
            // <div className={'btn-group' + (this.state.open ? ' show' : '')} >
            //     <button className="btn btn-default dropdown-toggle" onClick={this.openHandler}>
            //          { this.props.selected ? this.props.selected : 'Select template'}
            //         <span className="caret"></span>
            //     </button>
            //     <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            //         {this.props.options.map((option, index) => (
            //             <li key={index} ><a href="/" onClick={this.clickHanlder}>{ option }</a></li>
            //         ))}
            //     </ul>
            // </div>
        )
    }
}

export default Dropdown;