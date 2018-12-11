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
    padding: 10px 20px;
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
const FieldWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #969696;
    font-size: 12px;
    padding: 10px 20px;
    input {
        border: none;
        border-bottom: 1px solid #c9c9c9;
        padding: 5px;
        width: 50px;
        &:focus {
            outline: none;
        }
    }
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
                    <FieldWrapper>
                        <span>Color</span>
                        <ColorPicker  stylesElement={this.props.stylesElement} handlerStyles={(element) => this.props.handlerStyles(element)} />
                    </FieldWrapper> 
                    <FieldWrapper>
                        <span>Font-size</span>
                        <input type="number" name="fontSize" defaultValue={this.props.stylesElement.fontSize ? this.props.stylesElement.fontSize.substring(0,2) : '16'} onChange={(e) => this.props.handlerStyles({'prop':e.target.name, 'value': e.target.value})}  />
                    </FieldWrapper>
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