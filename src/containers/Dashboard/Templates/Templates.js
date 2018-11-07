import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import './Templates.scss'
import Template from './Template/Template';
import Modal from '../../../components/UI/Modal/Modal'


class Templates extends Component {

  state = {
    show: false,
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
  
  render() {
    return (
      <div className="templates-wrapper">
          <h2>Templates</h2>
          <div className="row templates-container"> 
              {this.props.templates && this.props.templates.map(template => (
                <Template key={template.id} template={template} clickHandler={this.clickHandler}/>
              ))}
          </div>
          <Modal show={this.state.show} modalClosed={this.cancelHandler}>
       
          <div className="template-create-site">
            <p>New site</p>
            <input  className="form-control"/>
            
          </div>
          <div className="btn-container">
              <div className="cancel-btn" onClick={this.cancelHandler}>Cancel</div>
              <div className="apply-btn" onClick={this.cancelHandler}>Save</div>        
            </div>    
        </Modal>
      </div>
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
    toFetchTemplates: () => dispatch(actions.fetchTemplates())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
