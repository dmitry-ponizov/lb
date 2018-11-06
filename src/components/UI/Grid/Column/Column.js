import React, { Component } from 'react'
import './Column.scss'
import Tool from '../Tools/Tool'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

class Column extends Component {

  onDragOver = (e) => {
    e.preventDefault();
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
  onDragEnd = result => {
      const { destination, source, draggableId } = result;
      // console.log(destination, source, draggableId )
      if(!destination) {
        return
      }

      if(destination.draggbleId === source.draggbleId &&
        destination.index === source.index
        ){
          return
        }
      const column = this.props.components
      const newItemsIds = Array.from(column.itemsIds)
      newItemsIds.splice(source.index, 1)
      newItemsIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...column,
        itemsIds: newItemsIds
      }
      this.props.reorderHandler(newColumn, this.props.columnName)
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
          <div className='column-content'
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e)} >
            <Droppable droppableId={this.props.columnName}>
            {(provided) => (
              <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              >
                  {this.props.components.itemsIds.map((itemId, index) => (
                    <Tool
                      index={index}
                      tag={this.props.components['items'][itemId]['name']}
                      settings={{
                        columnName: this.props.columnName,
                        gridType: this.props.gridType,
                        rowNumber: this.props.rowNumber,
                        itemId: index,
                        id: itemId
                      }}
                      stylesHandler={(style, value) => this.props.stylesHandler(style, value)}
                      selectedHandler={(settings) => this.props.selectedHandler(settings)}
                      itemHandler={(item, settings) => this.props.itemHandler(item, settings)}
                      editable={this.props.editable}
                      element={this.props.components['items'][itemId]}
                      key={itemId}
                    />
                  ))}
                  {provided.placeholder}
              </div>
            )}
            </Droppable>
          </div>
      </DragDropContext>
    )
  }

}

export default Column;