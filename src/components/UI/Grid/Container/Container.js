
import Row from '../Row/Row'
import React, { Component, Fragment } from 'react'

export default class Container extends Component {

  render() {
    return (
        <Fragment>
         {this.props.rows.map((row,rowNumber) => 
            <div key={rowNumber}  >
                {Object.values(row).map((cells,index) => 
                <Row key={index} rowNumber={rowNumber} columns={Object.keys(row)[0]} row={cells}  editable={this.props.editable}/>)}
            </div>)}
        </Fragment>
    )
  }
}


