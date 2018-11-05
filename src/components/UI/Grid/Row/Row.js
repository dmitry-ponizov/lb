import React, { Component } from 'react'
import Column from '../Column/Column'
import './Row.scss'

class Row extends Component {

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
            <div className="row">
                {Object.keys(this.props.row).map((cell, index) =>
                    <div key={index} className={(this.props.editable ? 'row-content' : '') + classes[index]}>
                        <Column
                            editable={this.props.editable}
                            columnName={cell}
                            gridType={this.props.columns}
                            stylesHandler={(style, value) => this.props.stylesHandler(style, value)}
                            selectedHandler={(settings) => this.props.selectedHandler(settings)}
                            itemHandler={(item, settings) => this.props.itemHandler(item, settings)}
                            rowNumber={this.props.rowNumber}
                            name={cell}
                            onDropHandler={(id) => this.props.onDropHandler(id)}
                            components={this.props.row[cell]} />
                    </div>)}
            </div>
        )
    }
}




export default Row;

