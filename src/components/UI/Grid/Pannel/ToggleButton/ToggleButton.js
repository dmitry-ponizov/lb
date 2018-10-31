import React from 'react'
import './ToggleButton.scss'


const ToggleButton = (props) => {
    return (
        <div 
            className={props.active ? 'hide-btn' : 'grid-panel-toggle-btn'}
            onClick={() => props.showGridHandler(!props.active)}>
        </div>
    )
}

export default ToggleButton;