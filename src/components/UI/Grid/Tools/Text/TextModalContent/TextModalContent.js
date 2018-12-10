import React, { Component } from 'react'
import ToolElement from '../ToolElement/ToolElement'
import { ModalButtons, Button  } from '../../../../../../styled/Modal'
import initElements from './initElements'
import styled from 'styled-components'
import ColorPicker from '../ColorPicker/ColorPicker'

const ActionWrapper = styled.div`
    
`

const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #969696;
    font-family: Muli;
    font-size: 12px;
    padding: 20px;
    align-items: center;
`

const ActionsTitle = styled.div`
    &:first-letter {
        text-transform: uppercase;
    }
`
const Actions = styled.div`
    min-width: 100px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
        i {
            &:hover {
                color:#333;
            }
        }
`
const ColorPickerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: #969696;
    font-size: 12px;
    padding: 20px;
`

class TextModalContent extends Component {
    state = {
        elements: initElements,
    }
    render() {
        return (
            <React.Fragment>
                <p>Text editor</p>
                <ActionWrapper>
                    {Object.keys(this.state.elements).map((element, index) => (
                        <ActionsContainer key={index} >
                            <ActionsTitle>
                                {element}
                            </ActionsTitle>
                            <Actions>
                                {this.state.elements[element].map((el, index) => (
                                    <ToolElement 
                                        element={el} 
                                        key={index} 
                                        handlerStyles={(element) => this.props.handlerStyles(element)} 
                                        currentStyleActive={this.props.currentStyleActive}
                                    />
                                ))}
                            </Actions>
                        </ActionsContainer>
                    ))}
                    <ColorPickerWrapper>
                        <span>Color</span>
                        <ColorPicker  stylesElement={this.props.stylesElement} handlerStyles={(element) => this.props.handlerStyles(element)} />
                    </ColorPickerWrapper> 
                </ActionWrapper>
                <ModalButtons >
                    <Button onClick={this.props.cancelHandler}><span>Cancel</span></Button>
                    <Button onClick={this.props.saveChanges}><span>Apply</span></Button>
                </ModalButtons>
            </React.Fragment>
        )
    }
}

export default TextModalContent;