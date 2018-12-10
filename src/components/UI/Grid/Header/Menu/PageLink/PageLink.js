import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
    display:flex;
    font-family: Muli;
    font-size: 14px;
    letter-spacing: 0.3px;
    color: ${props => props.active ? '#e36854' :'#000000' };
    margin: 30px 30px 30px 0;
    transition: color 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        color: #e36854;
    }
`

class PageLink extends React.Component {
  selectPage = (e) => {
    e.preventDefault()
    this.props.onSelectPage(this.props.page)
  }
  render() {
    return (
      <Wrapper 
        href={'./' + (this.props.page === 'Home' ? 'index' :this.props.page) + '.html'} 
        active={this.props.currentPage === this.props.page } 
        onClick={this.selectPage}
      >
        { this.props.page }
      </Wrapper>
    )
  }
}
export default PageLink;


