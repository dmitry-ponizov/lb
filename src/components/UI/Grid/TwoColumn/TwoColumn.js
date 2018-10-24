import React from 'react'
import Aux from '../../../../hoc/Aux/Aux'
import classes from './TwoColumn.module.css'
import Column from '../Column/Column'

const twoColumn = (props) => (
    <Aux>
        <div className={classes.Column + ' col-md-6'}><Column elements={props.elements} /></div>  
        <div className={classes.Column + ' col-md-6'}><Column elements={props.elements} /></div>  
    </Aux>
)


export default twoColumn;