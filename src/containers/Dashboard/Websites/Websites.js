import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, WorkspaceTitle, WorkspaceLink } from '../../../styled/Workspace'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions'
import styled from 'styled-components'
import Website from './Website/Website'
import CreateWebsite from './CreateWebsite/CreateWebsite'
import ReactSVG from 'react-svg'
import manImg from '../../../assets/images/man.svg'
import { Link } from 'react-router-dom'
import { EmptyWrapper, EmptyTitle } from '../../../styled/Empty'


const WebsitesWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`



class Websites extends Component {

  componentDidMount = () => {
    this.props.onFetchWebsites()
    this.props.onResetRows()
    this.props.onResetWebiste()
    this.props.onSelectSection('websites')
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
          {this.props.websites && this.props.websites.data.length ?
          <React.Fragment>
            <CreateWebsite />
            <WebsitesWrapper>
              {this.props.websites.data.map(website => 
                <Website key={ website.id } website={ website } selectWebsiteHandler={(website) => this.selectWebsiteHandler(website)} />) }
            </WebsitesWrapper>
          </React.Fragment> : ''}
          {this.props.websites && !this.props.websites.data.length && !this.props.loading && 
          <EmptyWrapper> 
              <ReactSVG src={manImg} />
              <EmptyTitle>It seems you don’t have any websites yet…</EmptyTitle>
              <WorkspaceLink>
                <Link to='/templates' onClick={() => this.props.onSelectSection('templates')} >Create a website<i className="fa fa-angle-right"></i></Link>
              </WorkspaceLink>
           </EmptyWrapper>}
        </WorkspaceWrapper>
      </DashboardLayout>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      onFetchWebsites: () => dispatch(actions.fetchWebsites()),
      onSelectWebsite: (website) => dispatch(actions.selectWebsite(website)),
      onSelectTemplate: (template) => dispatch(actions.selectTemplate(template)),
      onResetRows: () => dispatch(actions.resetRows()),
      onResetWebiste: () => dispatch(actions.resetWebsite()),
      onSelectSection: (section) => dispatch(actions.selectSection(section))
    }
}

const mapStateToProps = state => {
    return {
      websites: state.websites.websites,
      loading: state.websites.lo
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Websites);