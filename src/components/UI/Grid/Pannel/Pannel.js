import React, { Component } from 'react';
import GridButton from '../GridButton/GridButton'
import './Pannel.scss'
import ToggleButton from './ToggleButton/ToggleButton'

class Pannel extends Component {
    state = {
        active: false
    }
    
    showGridHandler = (status) => {
        this.setState({
            active: status
        })
    }
    render() {
        return (
            <div className="grid-panel">
                <ToggleButton active={ this.state.active } showGridHandler={(active) => this.showGridHandler(active)} />
                <ul className={this.state.active ? "pannel" : 'hide-panel'}>
                    { this.props.buttons.map((button, index) => <GridButton key={index} image={button} />) }
                </ul>
            </div>
        )
    }
} 
 
export default Pannel