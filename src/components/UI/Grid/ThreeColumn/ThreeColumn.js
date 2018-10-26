import React, { Component } from 'react'
import Aux from '../../../../hoc/Aux/Aux'
import classes from './ThreeColumn.module.css'
import Column from '../Column/Column'

class ThreeColumn extends Component {


    render() {

        return(
        <Aux>
            {Object.keys(this.props.row).map((cell, index) => <div key={index} className={classes.Column + ' col-md-4'}>
            <Column 
                selectedHandler={(settings) => this.props.selectedHandler(settings)}
                itemHandler={(item,settings) =>this.props.itemHandler(item,settings)}
                elements={this.props.elements} 
                columnName={cell} 
                gridType={this.props.gridType}  
                rowNumber={this.props.rowNumber} 
                name={cell} 
                onDropHandler={(id)=>this.props.onDropHandler(id)}  
                components={this.props.row[cell]} />
            </div> )}
        </Aux>
        )
    }

}



export default ThreeColumn;