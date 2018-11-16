import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, WorkspaceTitle } from '../../../styled/Workspace'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions'
import styled from 'styled-components'
import Website from './Website/Website'
import CreateWebsite from './CreateWebsite/CreateWebsite'

   
const WebsitesWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`

class Websites extends Component {

  componentDidMount = () => {
    this.props.onFetchWebsites()
  }

  selectWebsiteHandler = (website) => {
    this.props.onSelectWebsite(website)
    this.props.onSelectTemplate(website.theme)
    this.props.history.push('/builder')
  }
  
  render() {
    return (
      <DashboardLayout>
        <WorkspaceWrapper>
          <WorkspaceTitle> My Websites</WorkspaceTitle>
          <CreateWebsite />
          <WebsitesWrapper ref={"container"}>
            { this.props.websites && this.props.websites.data.map(website => 
              <Website key={ website.id } website={ website } selectWebsiteHandler={(website) => this.selectWebsiteHandler(website)} />) }
          </WebsitesWrapper>
        </WorkspaceWrapper>
      </DashboardLayout>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      onFetchWebsites: () => dispatch(actions.fetchWebsites()),
      onSelectWebsite: (website) => dispatch(actions.selectWebsite(website)),
      onSelectTemplate: (template) => dispatch(actions.selectTemplate(template))
    }
}

const mapStateToProps = state => {
    return {
      websites: state.websites.websites
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Websites);