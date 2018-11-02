import React, { Component } from 'react'
import './Text.scss'
import ContentEditable from 'react-contenteditable'
import Modal from '../../../Modal/Modal'



class Text extends Component {

    state ={
        html: this.props.element.content,
        active: false,
        currentStyleActive: null,

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

    handlerStyles = (style, value) => {
        this.props.stylesHandler(style, value)
        const currentStyleActive = {}
        currentStyleActive[style] = value
        
        this.setState({
            currentStyleActive: currentStyleActive
        })
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
                    <div className="alignment">
                        <div className="alignment-title">
                            Alignment
                        </div>
                        <div className="alignment-tools">
                            <div className={this.state.currentStyleActive 
                                && Object.keys(this.state.currentStyleActive)[0] === 'textAlign' 
                                    && Object.values(this.state.currentStyleActive)[0] === 'left' ? 'active' : ''}
                                    onClick={() => this.handlerStyles('textAlign','left')} >
                                    <i className="fa fa-align-left"></i>
                            </div>
                            <div 
                                className={this.state.currentStyleActive && Object.keys(this.state.currentStyleActive)[0] === 'textAlign' 
                                && Object.values(this.state.currentStyleActive)[0] === 'center' ? 'active' : ''}
                                 onClick={() => this.handlerStyles('textAlign','center')}>
                                <i className="fa fa-align-center"></i>
                            </div>
                            <div 
                                className={this.state.currentStyleActive && Object.keys(this.state.currentStyleActive)[0] === 'textAlign' 
                                && Object.values(this.state.currentStyleActive)[0] === 'right' ? 'active' : ''}
                                onClick={() => this.handlerStyles('textAlign','right')}>
                                <i className="fa fa-align-right"></i>
                            </div>
                            <div 
                                 className={this.state.currentStyleActive && Object.keys(this.state.currentStyleActive)[0] === 'textAlign' 
                                 && Object.values(this.state.currentStyleActive)[0] === 'justify' ? 'active' : ''}
                                onClick={() => this.handlerStyles('textAlign','justify')}>
                                <i className="fa fa-align-justify" ></i>
                            </div>
                        </div>
                    </div>
                    <div className="tools">
                        <div className="tools-title">
                            Tools
                        </div>
                        <div className="font-tools">
                            <div className={this.state.currentStyleActive && Object.keys(this.state.currentStyleActive)[0] === 'fontWeight' 
                                && Object.values(this.state.currentStyleActive)[0] === 'bold' ? 'active' : ''}
                                onClick={() => this.handlerStyles('fontWeight','bold')} >
                                <i className="fa fa-bold" aria-hidden="true"></i>
                            </div>
                            <div className={this.state.currentStyleActive && Object.keys(this.state.currentStyleActive)[0] === 'fontStyle' 
                                && Object.values(this.state.currentStyleActive)[0] === 'italic' ? 'active' : ''}
                                onClick={() => this.handlerStyles('fontStyle','italic')} >
                                <i className="fa fa-italic" aria-hidden="true"></i>
                            </div> 
                            <div className={this.state.currentStyleActive && Object.keys(this.state.currentStyleActive)[0] === 'textDecoration' 
                                && Object.values(this.state.currentStyleActive)[0] === 'underline' ? 'active' : ''}
                                onClick={() => this.handlerStyles('textDecoration','underline')} >
                                <i className="fa fa-underline" aria-hidden="true"></i>
                            </div>     
                            <div className={this.state.currentStyleActive && Object.keys(this.state.currentStyleActive)[0] === 'fontSize' 
                                && Object.values(this.state.currentStyleActive)[0] === '18px' ? 'active' : ''}
                                onClick={() => this.handlerStyles('fontSize','18px')} >
                            <i className="fa fa-text-height" aria-hidden="true"></i> 
                            </div>     
                        </div>      
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