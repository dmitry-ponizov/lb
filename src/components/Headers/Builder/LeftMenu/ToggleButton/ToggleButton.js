import React, { Component } from 'react'
import './ToggleButton.scss'

class ToggleButton extends Component {

    state = {
        active: true
    }

    toggleHandler = () => {
        this.setState(prevState => ({ 
            active: !prevState.active
        }))

        this.props.toggleHandler(!this.state.active)
    }
    render(){
        return (
            <div className="toggleButton" onClick={this.toggleHandler}>
                <div className={this.state.active ? 'hamburger-menu active': 'hamburger-menu'}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        )
    }

}

export default ToggleButton;