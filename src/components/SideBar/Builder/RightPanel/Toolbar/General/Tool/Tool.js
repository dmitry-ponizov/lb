import React, { Component } from 'react'
import styled from 'styled-components'
import ReactSvg from 'react-svg'

const DraggableStyled = styled.div`
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 70px;
    height: 70px;
    cursor: pointer;
    p {
        margin: 0;
        font-size: 10px;
        margin-top: 5px;
        font-weight: normal;
    }
    
`

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
            <DraggableStyled
                onDragStart={(e) => this.onDragStart(e, this.props.tool.id)}
                onDragEnd={(e)=> this.onDragEnd(e)}
                className="col-md-4"
                style={{ backgroundColor: this.props.tool.bgcolor }}
                draggable
                >
                <ReactSvg src={require(`../../../../../../../assets/images/tools/${this.props.tool.name}.svg`)} alt={this.props.tool.name} />
                <p>{this.props.tool.name}</p>
            </DraggableStyled>
        )
    }
} 
export default Tool;