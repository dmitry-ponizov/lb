import React from 'react'
import Aux from '../../../../hoc/Aux/Aux'
import classes from './TwoColumn.module.css'
import Column from '../Column/Column'

const twoColumn = (props) => (
    <Aux>
        <div className={classes.Column + ' col-md-6'}><Column elements={props.elements} onDropHandler={(id)=>props.onDropHandler(id)}  components={props.components} /></div>  
        <div className={classes.Column + ' col-md-6'}><Column elements={props.elements} onDropHandler={(id)=>props.onDropHandler(id)}  components={props.components} /></div>  
    </Aux>
)


export default twoColumn;