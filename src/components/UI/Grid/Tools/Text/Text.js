import React, { PureComponent } from 'react'
import ContentEditable from 'react-contenteditable'
import Modal from '../../../Modal/Modal'
import { Draggable } from 'react-beautiful-dnd'
import SmallModal from '../../SmallModal/SmallModal'
import { BuilderContext } from '../../../../../containers/Builder/BuilderContext/BuilderContext'
import TextModalContent from './TextModalContent/TextModalContent'
import styled from 'styled-components'

const DroppableContent = styled.div`
    &:hover {
        .small-modal {
            display: flex;
        }
    }
`
const TextToolStyled = styled.div`
    cursor: text;
    position: relative;
    margin-bottom: 1px;
    .small-modal{
        display: none;
        background: #fff;
    }
    &:hover{
        cursor: text;
        outline:solid 1px #e36854;
        cursor: text;
        .small-modal {
            display: flex;
        }
    }
    &:focus {
        cursor: text;
        .small-modal {
            display: flex;
        }
    }
    div {
        &:focus {
            cursor: text;
            outline:solid 1px #e36854;
            .small-modal {
                display: flex;
            }
        }
    }
`

class Text extends PureComponent {

    static contextType = BuilderContext;

    state = {
        html: this.props.element.content,
        active: false,
        currentStyleActive: null,
    }

    handleChange = evt => {
        this.setState({ html: evt.target.value });
        this.context.changeContentItem({
            content: evt.target.value,
            id: this.props.element.id,
            name: this.props.element.name,
            styles: this.props.element.styles
        }, this.props.settings)
    };

    clickHandler = (e) => {
        e.stopPropagation();
        let settings = Object.assign({}, this.props.settings)
        settings.type = this.props.element.name
        this.context.selectedHandler(settings)
        this.setState({ active: true })
    }
    cancelHandler = () => {
        this.setState({ active: false })
    }

    handlerStyles = (element) => {
        this.context.stylesHandler(element.prop, element.value)
        this.setState({
            currentStyleActive: element.class
        })
    }
    keyPressHandler = (event) => {
        event.stopPropagation();
        if(event.keyCode === 46){
            this.context.deleteItemHandler(this.props.settings)
        }
    }
    render() {
        return (
            <Draggable draggableId={this.props.settings.id} index={this.props.index}>
                {provided => (
                    <DroppableContent {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                        <TextToolStyled>
                            <ContentEditable
                                onKeyDown={this.keyPressHandler}
                                className="content-editable"
                                style={this.props.element.styles}
                                html={this.state.html}
                                disabled={this.props.editable}
                                onChange={this.handleChange}
                                tagName='div'
                                onClick={this.clickHandler}
                            />
                            <div className="small-modal">
                                <SmallModal  
                                    show={this.props.selectedItem && this.props.selectedItem.id === this.props.settings.id && this.state.active} 
                                    onClickHandler={ (settings) => this.context.deleteItemHandler(this.props.settings) } />
                            </div>
                        </TextToolStyled>
                        <Modal 
                            show={this.props.selectedItem && this.props.selectedItem.id === this.props.settings.id && this.state.active} 
                            backdrop={false} 
                            modalClosed={this.cancelHandler}>
                            <TextModalContent 
                                    handlerStyles={(element) => this.handlerStyles(element)} 
                                    cancelHandler={this.cancelHandler} 
                                    currentStyleActive={this.state.currentStyleActive} />
                        </Modal>
                    </DroppableContent>
                )}    
            </Draggable> 
        )
    }
}


export default Text;