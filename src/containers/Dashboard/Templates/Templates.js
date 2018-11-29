import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import './Templates.scss'
import Template from './Template/Template';
import Modal from '../../../components/UI/Modal/Modal'
import { withRouter } from 'react-router-dom';
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, WorkspaceTitle } from '../../../styled/Workspace'
import { ModalButtons, Button } from '../../../styled/Modal'
import styled from 'styled-components'
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage'
import { Redirect } from 'react-router-dom'

const ButtonStyled = styled(Button)`
  padding: 13px 75px;
`

const CreateWebsite = styled.div`
    padding: 20px;
    input{
      font-size: 1.5rem;
      height: 3.25rem;
    }

`

class Templates extends Component {

  state = {
    show: false,
    siteName: ''
  }

  componentDidMount = () => {
    
    if(!this.props.templates.length){
      this.props.toFetchTemplates();
    }
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
    this.props.onResetWebiste()
    this.props.onResetRows()
    this.props.onCreateWebsite(this.state.siteName)

  }

  
  render() {
    if(this.props.website){
       return (
          <Redirect to="/builder" />  
          )
    
    }
    return (
      <DashboardLayout>
        <WorkspaceWrapper className="templates-wrapper">
            <WorkspaceTitle>Templates</WorkspaceTitle>
              <div className="row templates-container"> 
                  {this.props.templates && this.props.templates.map(template => (
                    <Template key={template.id} template={template} clickHandler={this.clickHandler}/>
                    ))}
              </div>
            <Modal show={this.state.show} modalClosed={this.cancelHandler} backdrop={true}>
              <CreateWebsite>
                <p>New site</p>
                <input  className="form-control" onChange={this.changeSiteNameHandler}/>
                <ErrorMessage errors={this.props.errors} position="left" fontSize="1.2rem" />
              </CreateWebsite>
              <ModalButtons className="btn-container">
                  <ButtonStyled  onClick={this.cancelHandler}><span>Cancel</span></ButtonStyled>
                  <ButtonStyled  onClick={this.createSiteHandler}><span>Save</span></ButtonStyled>        
              </ModalButtons>    
          </Modal>
        </WorkspaceWrapper>
      </DashboardLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    templates: state.templates.templates,
    errors: state.websites.error,
    website: state.websites.website
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toFetchTemplates: () => dispatch(actions.fetchTemplates()),
    onCreateWebsite: (siteName) => dispatch(actions.createWebsite(siteName)),
    onResetRows: () => dispatch(actions.resetRows()),
    onResetWebiste: () => dispatch(actions.resetWebsite())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Templates));
