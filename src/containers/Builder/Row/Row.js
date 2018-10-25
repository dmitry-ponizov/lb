import React, { Component } from 'react'
import DynamicComponent from '../../../hoc/DynamicComponent/DynamicComponent'


class Row extends Component {
  
    render() {
        return(
            <div className="row">
              {this.props.columns ? <DynamicComponent 
                                    rowNumber={this.props.rowNumber}
                                    tag={this.props.columns} 
                                    row={this.props.row} 
                                    onDropHandler={(id)=>this.props.onDropHandler(id)} 
                                    components={this.props.components} 
                                    elements={this.props.elements}
               /> : null}
            </div>
        )
    }
}

export default Row;

