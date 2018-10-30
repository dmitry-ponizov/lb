import React, { Component } from 'react'
import './Column.scss'
import Tool from '../Tools/Tool'

class Column extends Component {

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDragStart = (e) => {
    console.log('start')

  }

  onDrop = (e) => {
    let gridType = this.props.gridType;
    let rowNumber = this.props.rowNumber;
    let columnName = this.props.columnName;
    let id = e.dataTransfer.getData('id');

    let newColumn = {
      'gridType': gridType,
      'rowNumber': rowNumber,
      'columnName': columnName,
      'id': id
    }
    this.props.onDropHandler(newColumn)

  }
  render() {
    return (
      <div className='content'
        onDragStart={(e) => this.onDragStart(e)}
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e)} >
        {this.props.components.map((element, index) => (
          <Tool
            tag={element.name}
            settings={{
              columnName: this.props.columnName,
              gridType: this.props.gridType,
              rowNumber: this.props.rowNumber,
              itemId: index
            }}
            editable={this.props.editable}
            selectedHandler={(settings) => this.props.selectedHandler(settings)}
            itemHandler={(item, settings) => this.props.itemHandler(item, settings)}
            element={element}
            key={element.id}
          />
        ))}
      </div>

    )
  }

}

export default Column;