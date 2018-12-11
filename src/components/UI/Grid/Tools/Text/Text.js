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
    &:hover{
        cursor: text;
        outline:solid 1px #e36854;
        cursor: text;  
    }
    &:focus {
        cursor: text;
      
    }
    div {
        &:focus {
            cursor: text;
            outline:solid 1px #e36854;
        }
    }
`

class Text extends PureComponent {

    static contextType = BuilderContext;

    state = {
        html: this.props.element.content,
        active: false,
        currentStyleActive: null,
        fontSize: 16,
    }

    handleChange = evt => {
        this.setState({ html: evt.target.value });
    };

    clickHandler = (e) => {
        e.stopPropagation();
        let settings = Object.assign({}, this.props.settings)
        settings.type = this.props.element.name
        this.context.selectedHandler(settings)
        this.setState({ active: true })
    }
    cancelHandler = () => {

        this.setState({ html: this.props.element.content })
        this.setState({ active: false })
    }

    handlerStyles = (element) => {
        let value = element.value;
        if (element.prop === 'fontSize') {
            value = value + 'px'
        }
        this.context.stylesHandler(element.prop, value)
        this.setState({
            currentStyleActive: element.class
        })
    }
    keyPressHandler = (event) => {
        event.stopPropagation();
        if (event.keyCode === 46) {
            this.context.deleteItemHandler(this.props.settings)
        }
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });

    };

    saveChanges = () => {
        this.sendChanges()
        this.setState({ active: false })
    }
    blurHandler = () => {
        this.sendChanges()
    }
    sendChanges = () => {
        if (this.props.element.content !== this.state.html) {
            this.context.changeContentItem({
                content: this.state.html,
                id: this.props.element.id,
                name: this.props.element.name,
                styles: this.props.element.styles
            }, this.props.settings)
        }
    }
    render() {
        return (
            <Draggable draggableId={this.props.settings.id} index={this.props.index}>
                {provided => (
                    <DroppableContent {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="builder-text">
                        <TextToolStyled>
                            <ContentEditable
                                onKeyDown={this.keyPressHandler}
                                className="content-editable"
                                style={this.props.element.styles}
                                html={this.state.html}
                                onBlur={this.blurHandler}
                                disabled={this.props.editable}
                                onChange={this.handleChange}
                                tagName='div'
                                onClick={this.clickHandler}
                                disabled={!this.props.editable}
                            />
                            <SmallModal
                                show={this.props.selectedItem && this.props.selectedItem.id === this.props.settings.id && this.state.active}
                                onClickHandler={(settings) => this.context.deleteItemHandler(this.props.settings)} />
                        </TextToolStyled>
                        <Modal
                            show={this.props.selectedItem && this.props.selectedItem.id === this.props.settings.id && this.state.active}
                            backdrop={false}
                            modalClosed={this.cancelHandler}>
                            <TextModalContent
                                stylesElement={this.props.element.styles}
                                handlerStyles={(element) => this.handlerStyles(element)}
                                cancelHandler={this.cancelHandler}
                                saveChanges={this.saveChanges}
                                currentStyleActive={this.state.currentStyleActive} />
                        </Modal>
                    </DroppableContent>
                )}
            </Draggable>
        )
    }
}


export default Text;