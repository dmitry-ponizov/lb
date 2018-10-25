import React, { Component } from 'react'
import Aux from '../../../../hoc/Aux/Aux'
import classes from './TwoColumn.module.css'
import Column from '../Column/Column'

class TwoColumn extends Component {


    render() {

        return(
        <Aux>
            {Object.keys(this.props.row).map((cell, index) => <div key={index} className={classes.Column + ' col-md-6'}>
        
            <Column elements={this.props.elements} columnName={cell} gridType={this.props.gridType}  rowNumber={this.props.rowNumber} name={cell} onDropHandler={(id)=>this.props.onDropHandler(id)}  components={this.props.row[cell]} />
            </div> )}
        </Aux>
        )
    }

}



export default TwoColumn;