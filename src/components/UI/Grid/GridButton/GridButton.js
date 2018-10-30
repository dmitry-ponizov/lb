import React from 'react'
import './GridButton.scss'

const gridButton = (props) => (
    <li onClick={() => props.gridSelect(props.image)} className={props.columns === props.image ? 'active': null}>
        <img src={require(`../../../../assets/images/row/${props.image}.png`)} alt={props.image} />
    </li>
)

export default gridButton