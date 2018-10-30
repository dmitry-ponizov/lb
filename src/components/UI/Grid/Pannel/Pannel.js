import React from 'react';
import GridButton from '../GridButton/GridButton'
import classes from './Pannel.module.css'

const pannel = (props) => {

    const buttons = ['oneColumn','twoColumns', 'threeColumns', 'fourColumns']

    const gridButtons = buttons.map((button, index) => 
                        <GridButton
                                columns={props.columns}
                                gridSelect={(columns) => props.gridHandler(columns)} 
                                key={index} 
                                image={button} />)

    return <ul className={classes.Pannel}>{ gridButtons }</ul>
}
 

export default pannel