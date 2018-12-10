import React, { Component } from 'react'
import { SketchPicker } from 'react-color';
import styled from 'styled-components'

const Swatch = styled.div`
    padding: 5px;
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1);
    display: inline-block;
    cursor: pointer;
`

const Popover = styled.div`
    position: absolute;
    z-index: 2;
`

const Cover = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`

const Color = styled.div`
    width: 36px;
    height: 14px;
    border-radius: 2px;
    background: ${props => props.color};
        
`
class ColorPicker extends Component {
    state = {
        displayColorPicker: false,
        color: this.props.stylesElement.color
    };
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
        this.props.handlerStyles({
            'prop': 'color',
            'value': this.state.color
        })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
        this.props.handlerStyles({
            'prop': 'color',
            'value': this.state.color
        })
    };

    handleChange = (color) => {
        this.setState({ color: color.hex })
        this.props.handlerStyles({
            'prop': 'color',
            'value': this.state.color
        })
    };

    render() {
        return (
            <div>
                <Swatch  onClick={this.handleClick}>
                    <Color color={this.state.color} />
                </Swatch>
                {this.state.displayColorPicker ? <Popover>
                    <Cover onClick={this.handleClose}></Cover>
                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                </Popover> : null}

            </div>
        )
    }
}
export default ColorPicker