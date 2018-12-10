import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display:flex;
    text-decoration: none;
    color: #e36854;
    margin: 30px 30px 30px 0;
    font-weight: bold;
    font-family: Muli;
    font-size: 14px;
    letter-spacing: 0.3px;
    cursor: pointer;
`


class Edit extends Component {

  render() {
    return (
      <Wrapper>
        <div onClick={this.props.editHandler}>Edit</div>
      </Wrapper>
    )
  }
}



export default Edit;