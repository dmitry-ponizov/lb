import React, { Component } from 'react'
import ToggleButton from './ToggleButton/ToggleButton'
import Logo from './Logo/Logo'
import './LeftMenu.scss'

class LeftMenu extends Component {

    state = {
        active: true
    }

    toggleHandler = (active) => {
        this.setState({
            active
        })

        this.props.toggleHandler(active)
    }

    render() {
        return (
            <div className='builder-header-left-menu'>
                <ToggleButton toggleHandler={(active) => this.toggleHandler(active) } />
                <Logo active={this.state.active} />
             </div>
        )
    }
} 

export default LeftMenu;