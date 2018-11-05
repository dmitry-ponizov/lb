import React, { Component }  from 'react'
import './TextPanel.scss'

class TextPanel extends Component {

    clickHandler = (style, value) => {
        this.props.stylesHandler(style, value)
    }
    render() {
        return (
            <div className="TextPannel">
                <p>Text align</p>
                <div onClick={() => this.clickHandler('textAlign','left')}>
                    <i className="fa fa-align-left"></i>
                </div>
                <div onClick={() => this.clickHandler('textAlign','center')}>
                    <i className="fa fa-align-center"></i>
                </div>
                <div onClick={() => this.clickHandler('textAlign','right')}>
                    <i className="fa fa-align-right"></i>
                </div>
                <div onClick={() => this.clickHandler('fontWeight','bold')}>
                 <i className="fa fa-text-width" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default TextPanel;
