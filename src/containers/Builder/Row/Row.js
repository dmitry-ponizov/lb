import React, { Component } from 'react'
import Column from '../../../components/UI/Grid/Column/Column'
import classes from './Row.module.css'
class Row extends Component {
  
    render() {
        return(
            <div className="row">
                {Object.keys(this.props.row).map((cell, index) => 
                <div key={index} className={classes.Column + ' col-md-' + 12/(this.props.row.length)}>
                    <Column 
                        selectedHandler={(settings) => this.props.selectedHandler(settings)}
                        itemHandler={(item,settings) =>this.props.itemHandler(item,settings)}
                        columnName={cell} 
                        gridType={this.props.columns}  
                        rowNumber={this.props.rowNumber} 
                        name={cell} 
                        onDropHandler={(id)=>this.props.onDropHandler(id)}  
                        components={this.props.row[cell]} />
                </div> )}
            </div>
        )
    }
}

export default Row;

