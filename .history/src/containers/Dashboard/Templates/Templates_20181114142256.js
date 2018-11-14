import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import './Templates.scss'
import Template from './Template/Template';
import Modal from '../../../components/UI/Modal/Modal'
import { withRouter } from 'react-router-dom';
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, WorkspaceTitle } from '../../../styled/Workspace'

class Templates extends Component {

  state = {
    show: false,
    siteName: ''
  }

  componentDidMount = () => {
    this.props.toFetchTemplates()
  }


  cancelHandler = () => {
    this.setState({show:false})
  }

  clickHandler = () => {
    this.setState({show:true})
  }
  
  changeSiteNameHandler = (e) => {
    this.setState({
      siteName:e.target.value
    })
  }
  createSiteHandler = () => {
    if(!this.state.siteName.length) {
        return
    }
    this.props.onCreateWebsite(this.state.siteName)
    this.props.history.push('/builder')
  }
  
  render() {
    return (
      <DashboardLayout>
        <div className="templates-wrapper">
            <WorkspaceTitle>Templates</h2>
            <div className="row templates-container"> 
                {this.props.templates && this.props.templates.map(template => (
                  <Template key={template.id} template={template} clickHandler={this.clickHandler}/>
                  ))}
            </div>
            <Modal show={this.state.show} modalClosed={this.cancelHandler}>
        
            <div className="template-create-site">
              <p>New site</p>
              <input  className="form-control" onChange={this.changeSiteNameHandler}/>
              
            </div>
            <div className="btn-container">
                <div className="cancel-btn" onClick={this.cancelHandler}>Cancel</div>
                <div className="apply-btn" onClick={this.createSiteHandler}>Save</div>        
              </div>    
          </Modal>
        </div>
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    templates: state.templates.templates
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toFetchTemplates: () => dispatch(actions.fetchTemplates()),
    onCreateWebsite: (siteName) => dispatch(actions.createWebsite(siteName))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Templates));
