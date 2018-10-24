import React, { Component } from 'react'
import image from '../../../../assets/images/logo-zeeasy.png'
import Resizable from 're-resizable';

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0',
};

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
        let id = e.dataTransfer.getData('id');
        let elements = this.props.elements

        let element = {...elements.find(element => element.id == id)}
 
        let newElements = [...this.state.elements]
        element.id = `id${new Date().getTime()}`;
    
        newElements.push(element)

        this.setState({
          ...this.state,
          elements: newElements
        })
    
    }

    onChange(){

    }
    render() {
       

        return (
            <div className="droppable"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e)}
      >
             <div>{this.state.elements.map(element => {
                    if(element.name === 'Text') {
                        return(
                            <textarea key={element.id}
                              onDragStart={(e) => this.onDragStart(e, element.id)}
                              className="draggable"
                              style={{ backgroundColor: element.bgcolor }}
                              draggable
                              value={element.name}
                              onChange={this.onChange}
                            >{element.name}</textarea>
                        
                          )
                      }else if(element.name === 'Image') {
                        return(
                          <Resizable    key={element.id} style={style}
                          defaultSize={{
                            width: 100,
                            height: 100,
                          }}>
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
             })}</div>
          </div>  
        )
    }
}

export default Column;