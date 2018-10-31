import React, { Component } from 'react'
import './Text.scss'
import ContentEditable from 'react-contenteditable'
import Modal from '../../../Modal/Modal'

class Text extends Component {

    state ={
        html: this.props.element.content,
        active: false
    }

    handleChange = evt => {
        this.setState({html: evt.target.value});
        this.props.itemHandler({
            content: evt.target.value,
            id: this.props.element.id,
            name: this.props.element.name,
            styles: this.props.element.styles
        }, this.props.settings)
    };

    clickHandler = (e) => {
        let settings = Object.assign({},this.props.settings)
        settings.type = this.props.element.name
       this.props.selectedHandler(settings)
       this.setState({active:true})
    }
    cancelHandler = () => {
        this.setState({active: false})
    }
    render() {
        return(
            <div className={this.props.editable ? 'blockBuilder' : null} >
                <ContentEditable
                    style={ this.props.element.styles } 
                    html={this.state.html} 
                    disabled={!this.props.editable}       
                    suppressContentEditableWarning={true}
                    onChange={this.handleChange} 
                    tagName='div' 
                    onClick={this.clickHandler}
                 />
                <Modal show={this.state.active} modalClosed={this.cancelHandler}>
                    <p>Text editor</p>
                </Modal>
            </div>
        )
    }
}

export default Text;