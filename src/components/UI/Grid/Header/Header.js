import React, { Component } from 'react'
import Menu from './Menu/Menu'
import styled from 'styled-components'

const Wrapper = styled.header`
    display: flex;
    justify-content: flex-end;
`

class Header extends Component {
  render() {
    return (
        <Wrapper className="theme-header">
            <Menu 
              editable={this.props.editable}
              pages={this.props.pages} 
              currentPage={this.props.currentPage}
              changePage={(page) => this.props.changePage(page)}  
              editHandler={this.props.editHandler}
            />
        </Wrapper>
    )
  }
}

export default Header;