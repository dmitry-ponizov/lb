import React, { Component } from 'react'
import styled from 'styled-components'
import NotDomains from './NotDomains/NotDomains'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions'
import Domains from './Domains/Domains'

const MyDomainsStyles = styled.div`
  
`

class MyDomains extends Component {

  componentDidMount = () => {
    if(!this.props.domains.length) {
      this.props.onFetchDomains()
    }
  }
  
  render() {
    return (
      <MyDomainsStyles>
        { this.props.domains.length ? <Domains domains={ this.props.domains } /> : <NotDomains /> }
      </MyDomainsStyles>
    )
  }
}

const mapStateToProps = state => {
  return {
    domains: state.domains.myDomains
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchDomains: () => dispatch(actions.fetchDomains())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDomains)