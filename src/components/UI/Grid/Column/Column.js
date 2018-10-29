import React from 'react'
import './Column.scss'
import Tool from '../Tools/Tool'

const Column = (props) => {

  const onDragOver = (e) => {
      e.preventDefault();
  }

  const onDrop = (e) => {
      let gridType = props.gridType;
      let rowNumber = props.rowNumber;
      let columnName = props.columnName;      
      let id = e.dataTransfer.getData('id');

      let newColumn = {
        'gridType':gridType,
        'rowNumber':rowNumber,
        'columnName':columnName,
        'id':id
      }
    props.onDropHandler(newColumn)

  }
  return (
    <div className="droppable" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)} >
    {props.components.map((element, index) => (
          <Tool 
            tag={element.name} 
            settings={{
              columnName: props.columnName,
              gridType: props.gridType,
              rowNumber: props.rowNumber,
              itemId:index
            }} 
            editable={props.editable}
            selectedHandler={(settings) => props.selectedHandler(settings)}
            itemHandler={(item,settings) => props.itemHandler(item,settings)}
            element={element} 
            key={element.id}
          />
     ))}
  </div>  
  )
}

export default Column;