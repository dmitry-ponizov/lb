import React, { Component } from 'react'
import Tool from '../Tools/Tool'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { BuilderContext } from '../../../../containers/Builder/BuilderContext/BuilderContext'
import styled from 'styled-components'

const ColumnStyled = styled.div`
    display: 'flex';
    alignItems: 'center';
    justifyContent: 'center';
    background: '#fff';
    padding: 5px;
    min-height: 100px;  
`

const DroppableContent = styled.div`
  
`
class Column extends Component {

  static contextType = BuilderContext;

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
    this.context.onDropHandler(newColumn)
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return
    }

    if (destination.draggbleId === source.draggbleId &&
      destination.index === source.index
    ) {
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
    this.context.reorderHandler(newColumn, this.props.columnName, this.props.rowNumber, this.props.gridType)
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <ColumnStyled onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)} >
          <Droppable droppableId={this.props.columnName}>
            {(provided) => (
              <DroppableContent {...provided.droppableProps} ref={provided.innerRef}>
                {this.props.components.itemsIds.map((itemId, index) => (
                  <Tool
                    index={index}
                    selectedItem={this.props.selectedItem}
                    tag={this.props.components['items'][itemId]['name']}
                    settings={{
                      columnName: this.props.columnName,
                      gridType: this.props.gridType,
                      rowNumber: this.props.rowNumber,
                      itemId: index,
                      id: itemId
                    }}
                    editable={this.props.editable}
                    element={this.props.components['items'][itemId]}
                    key={itemId}
                  />
                ))}
                {provided.placeholder}
              </DroppableContent>
            )}
          </Droppable>
        </ColumnStyled>
      </DragDropContext>
    )
  }

}

export default Column;