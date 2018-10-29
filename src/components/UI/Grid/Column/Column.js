import React from 'react'
import image from '../../../../assets/images/logo-zeeasy.png'
import Resizable from 're-resizable';
import './Column.scss'
import Text from '../Text/Text'

const Column = (props) => {

 const onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id)
  }

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
    {props.components.map((element, index) => {
            if(element.name === 'Text') {
                return(
                    <Text settings={{
                      columnName: props.columnName,
                      gridType: props.gridType,
                      rowNumber: props.rowNumber,
                      itemId:index
                  }} 
                  selectedHandler={(settings) => props.selectedHandler(settings)}
                  itemHandler={(item,settings) => props.itemHandler(item,settings)} element={element} key={element.id}/>
                  )
              }else if(element.name === 'Image') {
                return(
                  <Resizable    key={element.id} className="Column" defaultSize={{ width: 100, height: 100,}}>
                    <img 
                      onDragStart={(e) => onDragStart(e, element.id)}
                      className="draggable"
                      style={{ backgroundColor: element.bgcolor, height:'100%', width: '100%' }}
                      draggable
                      src={image}
                      alt={image}
                    />
                  </Resizable>
                  )
              } else {
                return(
                  <a key={element.id}
                    onDragStart={(e) => onDragStart(e, element.id)}
                    className="draggable"
                    style={{ backgroundColor: element.bgcolor }}
                    draggable
                    href="https://google.com"
                  >Link</a>
                )
              }
     })}
  </div>  
  )
}

export default Column;