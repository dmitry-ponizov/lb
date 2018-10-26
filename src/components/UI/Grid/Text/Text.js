import React, { Component } from 'react'
import './Text.scss'
import ContentEditable from 'react-contenteditable'

class Text extends Component {

    state ={
        html: this.props.element.content
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
    }
    render() {
        return(
            <div className="blockBuilder">
                <ContentEditable
                    style={ this.props.element.styles } 
                    html={this.state.html} 
                    disabled={false}       
                    suppressContentEditableWarning={true}
                    onChange={this.handleChange} 
                    tagName='div' 
                    onClick={this.clickHandler}
                    />
                    
            </div>
        )
    }
}

export default Text;