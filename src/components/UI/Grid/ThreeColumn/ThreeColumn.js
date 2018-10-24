import React from 'react'
import Aux from '../../../../hoc/Aux/Aux'
import classes from './ThreeColumn.module.css'
import Column from '../Column/Column'

const threeColumn = (props) => (
    <Aux>
        <div className={classes.Column + ' col-md-4'}><Column elements={props.elements} /></div> 
        <div className={classes.Column + ' col-md-4'}><Column elements={props.elements} /></div> 
        <div className={classes.Column + ' col-md-4'}><Column elements={props.elements} /></div> 
    </Aux>
)


export default threeColumn;