
import Row from '../Row/Row'
import React, { Component, Fragment } from 'react'

export default class Container extends Component {

  render() {
    return (
        <Fragment>
         {this.props.rows.map((row,rowNumber) => 
            <div key={rowNumber} className={"builder-row-"+ (rowNumber + 1)}>
                {Object.values(row).map((cells,index) => 
                <Row key={index} selectedItem={this.props.selectedItem} rowNumber={rowNumber} columns={Object.keys(row)[0]} row={cells}  editable={this.props.editable}/>)}
            </div>)}
        </Fragment>
    )
  }
}


