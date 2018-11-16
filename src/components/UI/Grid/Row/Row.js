import React, { Component } from 'react'
import Column from '../Column/Column'
import './Row.scss'
import DeleteButton from './DeleteButton/DeleteButton'
import { BuilderContext } from '../../../../containers/Builder/BuilderContext/BuilderContext'

class Row extends Component {

    static contextType = BuilderContext;

   
    render() {
        let classes = null;
        switch(this.props.columns) {
            case('twoUneven'): 
                classes = [' col-md-4',' col-md-8']
                break;
            case('threeUneven'):
                classes = [' col-md-3',' col-md-6', ' col-md-3']
                break;
            default:
                classes = [' col-md-' + 12 / (this.props.row.length),
                ' col-md-' + 12 / (this.props.row.length),
                ' col-md-' + 12 / (this.props.row.length), 
                ' col-md-' + 12 / (this.props.row.length)
                ]
        }

        return (
                <div className={'row' + (this.props.editable ? ' row-hovered' : '')} >
                <DeleteButton deleteRowHandler={ (rowNumber) => this.context.rowDeleteHandler(this.props.rowNumber) } />
                {Object.keys(this.props.row).map((cell, index) =>
                    <div key={index} className={(this.props.editable ? 'row-content' : '') + classes[index]}>
                        <Column
                            columnName={cell}
                            gridType={this.props.columns}
                            rowNumber={this.props.rowNumber}
                            name={cell}
                            components={this.props.row[cell]} />
                    </div>)}
            </div>
        )
    }
}




export default Row;

