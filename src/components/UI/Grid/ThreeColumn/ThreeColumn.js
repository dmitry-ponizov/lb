import React, { Component } from 'react'
import Aux from '../../../../hoc/Aux/Aux'
import classes from './ThreeColumn.module.css'
import Column from '../Column/Column'

class ThreeColumn extends Component {


    render() {
        return(
            <Aux>
            <div className={classes.Column + ' col-md-4'}><Column elements={this.props.elements} onDropHandler={(id)=>this.props.onDropHandler(id)}  components={this.props.components} /></div> 
            <div className={classes.Column + ' col-md-4'}><Column elements={this.props.elements} onDropHandler={(id)=>this.props.onDropHandler(id)}  components={this.props.components}/></div> 
            <div className={classes.Column + ' col-md-4'}><Column elements={this.props.elements} onDropHandler={(id)=>this.props.onDropHandler(id)} components={this.props.components}/></div> 
        </Aux>
        )
    }

}



export default ThreeColumn;