import React from 'react'

const gridButton = (props) => (
    <li onClick={() => props.gridSelect(props.image)} >
        <img src={require(`../../../../assets/images/row/${props.image}.png`)} alt={props.image} />
    </li>
)

export default gridButton