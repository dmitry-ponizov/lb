import React, { Component } from 'react'
import './Text.scss'
import ContentEditable from 'react-contenteditable'
import Modal from '../../../Modal/Modal'
import ToolElement from './ToolElement/ToolElement'
import initElements from './initElements'
import { Draggable } from 'react-beautiful-dnd'
import SmallModal from '../../SmallModal/SmallModal'
import { BuilderContext } from '../../../../../containers/Builder/BuilderContext/BuilderContext'

class Text extends Component {

    static contextType = BuilderContext;

    state = {
        html: this.props.element.content,
        active: false,
        currentStyleActive: null,
        elements: initElements,

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
                <div className={this.context.editable ? 'blockBuilder' : null}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                <div style={{position: 'relative'}}>
                <ContentEditable
                    onKeyDown={this.keyPressHandler}
                    className="content-editable"
                    style={this.props.element.styles}
                    html={this.state.html}
                    disabled={!this.context.editable}
                    onChange={this.handleChange}
                    tagName='div'
                    onClick={this.clickHandler}
                    />
                <SmallModal  show={this.state.active} onClickHandler={ (settings) => this.context.deleteItemHandler(this.props.settings) } />
                    </div>
                <Modal show={this.state.active} modalClosed={this.cancelHandler}>
                    <p>Text editor</p>
                    <div className="text-tools">
                        {Object.keys(this.state.elements).map((element, index) => (
                            <div key={index} className="text-tool-wrap">
                                <div className="tools-title">
                                    {element}
                                </div>
                                <div className="elements">
                                    {this.state.elements[element].map((el, index) => (
                                        <ToolElement element={el} key={index} 
                                        handlerStyles={(element) => this.handlerStyles(element)} 
                                        currentStyleActive={this.state.currentStyleActive}
                                        />
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-container">
                        <div className="cancel-btn" onClick={this.cancelHandler}>Cancel</div>
                        <div className="apply-btn" onClick={this.cancelHandler} >Apply</div>
                    </div>
                </Modal>
            </div>
              )}    
            </Draggable> 
        )
    }
}


export default Text;