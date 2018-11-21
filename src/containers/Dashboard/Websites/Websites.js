import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, WorkspaceTitle } from '../../../styled/Workspace'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions'
import styled from 'styled-components'
import Website from './Website/Website'
import CreateWebsite from './CreateWebsite/CreateWebsite'
import ReactSVG from 'react-svg'
import manImg from '../../../assets/images/man.svg'
import { Link } from 'react-router-dom'

const WebsitesWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`
const NotWebsites = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

`
const NotWebsitesTitle = styled.div`
     margin-top: 30px;
    font-family: Muli;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #969696;

`
const CreateWebsiteLink = styled.div`
  font-family: Muli;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.3px;
  text-align: right;
  color: #e36854;
  margin-top:20px;
  a {
    text-decoration: none;
  }
  i {
    margin-left: 5px;
    font-weight: bold;
  }
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
          {!this.props.websites  && !this.props.loading? 
          <NotWebsites> 
          <ReactSVG src={manImg} />
          <NotWebsitesTitle>It seems you don’t have any websites yet…</NotWebsitesTitle>
          <CreateWebsiteLink>
            <Link to='/templates' onClick={() => this.props.onSelectSection('templates')} >Create a website<i className="fa fa-angle-right"></i></Link>
            </CreateWebsiteLink>
        </NotWebsites>
          :<React.Fragment>
            <CreateWebsite />
            <WebsitesWrapper>
              {this.props.websites && this.props.websites.data.map(website => 
                <Website key={ website.id } website={ website } selectWebsiteHandler={(website) => this.selectWebsiteHandler(website)} />) }
            </WebsitesWrapper>
            </React.Fragment>
          }
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
      loading: state.websites.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Websites);