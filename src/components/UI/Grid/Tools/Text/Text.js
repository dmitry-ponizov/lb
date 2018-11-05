import React, { Component } from 'react'
import './Text.scss'
import ContentEditable from 'react-contenteditable'
import Modal from '../../../Modal/Modal'
import ToolElement from './ToolElement/ToolElement'
import initElements from './initElements'

class Text extends Component {

    state = {
        html: this.props.element.content,
        active: false,
        currentStyleActive: null,
        elements: initElements
    }

    handleChange = evt => {
        this.setState({ html: evt.target.value });
        this.props.itemHandler({
            content: evt.target.value,
            id: this.props.element.id,
            name: this.props.element.name,
            styles: this.props.element.styles
        }, this.props.settings)
    };

    clickHandler = (e) => {
        let settings = Object.assign({}, this.props.settings)
        settings.type = this.props.element.name
        this.props.selectedHandler(settings)
        this.setState({ active: true })
    }
    cancelHandler = () => {
        this.setState({ active: false })
    }

    handlerStyles = (element) => {
        this.props.stylesHandler(element.prop, element.value)
        this.setState({
            currentStyleActive: element.class
        })
    }
    render() {
        return (
            <div className={this.props.editable ? 'blockBuilder' : null} >
                <ContentEditable
                    style={this.props.element.styles}
                    html={this.state.html}
                    disabled={!this.props.editable}
                    suppressContentEditableWarning={true}
                    onChange={this.handleChange}
                    tagName='div'
                    onClick={this.clickHandler}
                />
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
        )
    }
}


export default Text;