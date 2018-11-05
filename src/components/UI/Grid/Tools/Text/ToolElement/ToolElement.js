import React, { Component } from 'react'


class ToolElement extends Component {
    render() {
        return (
            <div className={this.props.element.class === this.props.currentStyleActive ? 'active': ''}
                onClick={() => this.props.handlerStyles(this.props.element)} >
                <i className={"fa " + this.props.element.class}></i>
            </div>
        )
    }
}

export default ToolElement