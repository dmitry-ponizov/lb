import React, { Component }  from 'react'
import './TextPanel.scss'

class TextPanel extends Component {

    clickHandler = (position) => {
        this.props.stylesHandler('textAlign', position)
    
    }
    render() {
        return (
            <div className="TextPannel">
                <p>Text align</p>
                <div onClick={() => this.clickHandler('left')}>
                    <i className="fa fa-align-left"></i>
                </div>
                <div onClick={() => this.clickHandler('center')}>
                    <i className="fa fa-align-center"></i>
                </div>
                <div onClick={() => this.clickHandler('right')}>
                    <i className="fa fa-align-right"></i>
                </div>
            </div>
        )
    }
}

export default TextPanel;
