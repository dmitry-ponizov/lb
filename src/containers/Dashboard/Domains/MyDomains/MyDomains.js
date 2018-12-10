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
      this.setState({ loading: false})
    }
  }
  
  render() {
    return (
      <MyDomainsStyles>
        { this.props.domains.length ? <Domains domains={ this.props.domains } /> : '' }
        { !this.props.domains.length && !this.props.loading && <NotDomains activeTabHandler={(tabNumber) => this.props.activeTabHandler(tabNumber)} /> }
      </MyDomainsStyles>
    )
  }
}

const mapStateToProps = state => {
  return {
    domains: state.domains.myDomains,
    loading: state.domains.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchDomains: () => dispatch(actions.fetchDomains())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDomains)