import React, { Component } from 'react'
import './Tool.scss'

class Tool extends Component {
    state = {
        active: false
    }

    onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id)
        this.setState({
            active: true
        })
    }

    onDragEnd = (e) => {
        this.setState({
            active: false
        })
        e.preventDefault();
    }

    render() {
        return (
            <div
                onDragStart={(e) => this.onDragStart(e, this.props.tool.id)}
                onDragEnd={(e)=> this.onDragEnd(e)}
                className={"draggable col-md-4" + (this.state.active ? ' active' : '')}
                style={{ backgroundColor: this.props.tool.bgcolor }}
                draggable
                >
                <img src={require(`../../../../../../assets/images/tools/${this.props.tool.name}.svg`)} alt={this.props.tool.name} />
                <p>Paragraph</p>
            </div>
        )
    }
} 
export default Tool;