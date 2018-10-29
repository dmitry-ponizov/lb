import React, { Component } from 'react'


class Link extends Component {
    render() {
        return (
            <a 
                className="draggable"
                style={{ backgroundColor: this.props.element.bgcolor }}
                draggable
                href="https://google.com"
                >Link
            </a>
        )
    }
}

export default Link;