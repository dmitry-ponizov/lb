import React, { Component } from 'react'
import DynamicComponent from '../../../hoc/DynamicComponent/DynamicComponent'


class Row extends Component {
    render() {
        return(
            <div className="row">
              {this.props.columns ? <DynamicComponent tag={this.props.columns} elements={this.props.elements} /> : null}
            </div>
        )
    }
}

export default Row;