import React from 'react';
import GridButton from '../GridButton/GridButton'
import classes from './Pannel.module.css'

const pannel = (props) => {

    const buttons = ['twoColumns', 'threeColumns']

    const gridButtons = buttons.map((button, index) => <GridButton gridSelect={(columns) => props.gridHandler(columns)} key={index} image={button} />)

    return <ul className={classes.Pannel}>{ gridButtons }</ul>
}
 

export default pannel