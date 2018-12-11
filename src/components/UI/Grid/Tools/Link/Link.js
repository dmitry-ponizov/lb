import React, { Component } from 'react'
import styled from 'styled-components';
import Modal from '../../../Modal/Modal'
const LinkStyled = styled.div`
  a {
    font-family: Muli;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.57;
    letter-spacing: 0.2px;
    color: #4d8ded;
  }

`

class Link extends Component {
    // static contextType = BuilderContext;

    state = {
        title: this.props.element.content,
        url: this.props.element.url,
        active: false,
    }
    clickHandler = (e) => {
        e.preventDefault();
        console.log(this.props.selectedItem)
        this.setState({ active: true })

    }
    cancelHandler = () => {

    }
    render() {
        return (
            <LinkStyled className="builder-link">
                <a href={this.state.url} onClick={this.clickHandler}>{this.state.title}</a>
                <Modal
                    show={this.props.selectedItem && this.props.selectedItem.id === this.props.settings.id && this.state.active}
                    backdrop={false}
                    modalClosed={this.cancelHandler}>
                    bla
                </Modal>
            </LinkStyled>
        )
    }
}

export default Link;