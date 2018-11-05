import React, { Component } from 'react'
import Resizable from 're-resizable';
import image from '../../../../../assets/images/logo-zeeasy.png'


class Image extends Component {
    onDragOver = (e) => {
        e.preventDefault();
    }
    
    onDragStart = (e, id) => {
        // e.dataTransfer.setData('id', id) 
    }
    render() {
        return (
            <Resizable  className="Column" defaultSize={{ width: 100, height: 100,}}>
                <img 
                    onDragStart={(e) => this.onDragStart(e, this.props.element.id)}
                    onDragOver={this.onDragOver}
                    className="draggable"
                    style={{ backgroundColor: this.props.element.bgcolor, height:'100%', width: '100%' }}
                    draggable
                    src={image}
                    alt={image}
                  />
            </Resizable>
        )
    }
}

export default Image;


