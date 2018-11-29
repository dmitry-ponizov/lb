import React, { Component } from 'react'
import styled from 'styled-components'
import SearchDomain from './SearchDomain/SearchDomain'


const BuyDomainsStyles = styled.div`
  display: flex;
`


class BuyDomains extends Component {
  render() {
    return (
      <BuyDomainsStyles>
        <SearchDomain activeTabHandler={(tab) => this.props.activeTabHandler(tab)} />
      </BuyDomainsStyles>
    )
  }
}

export default BuyDomains