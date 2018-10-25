import React, { Component } from 'react'
import image from '../../../../assets/images/logo-zeeasy.png'
import Resizable from 're-resizable';
import './Column.scss'

class Column extends Component {

    
    state = {
        elements: [],
    }

    onDragStart = (e, id) => {
   
        e.dataTransfer.setData('id', id)
    }

    onDragOver = (e) => {
   
        e.preventDefault();
    
    }

    onDrop = (e) => {
        let gridType = this.props.gridType;
        let rowNumber = this.props.rowNumber;
        let columnName = this.props.columnName;      
        let id = e.dataTransfer.getData('id');

        let newColumn = {
          'gridType':gridType,
          'rowNumber':rowNumber,
          'columnName':columnName,
          'id':id
        }
      this.props.onDropHandler(newColumn)
    
    }
   
    onChange(){

    }
    render() {

      return (
        <div className="droppable" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)} >
        {this.props.components.map(element => {
                if(element.name === 'Text') {
                    return(
                        <textarea key={element.id}
                          onDragStart={(e) => this.onDragStart(e, element.id)}
                          className="draggable"
                          style={{ backgroundColor: element.bgcolor }}
                          draggable
                          value={element.name}
                          onChange={this.onChange}>
                            {element.name}
                        </textarea>
                      )
                  }else if(element.name === 'Image') {
                    return(
                      <Resizable    key={element.id} className="Column" defaultSize={{ width: 100, height: 100,}}>
                        <img 
                          onDragStart={(e) => this.onDragStart(e, element.id)}
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
                        onDragStart={(e) => this.onDragStart(e, element.id)}
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
}

export default Column;