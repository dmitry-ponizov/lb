import React, { Component } from 'react'
import './Template.scss'
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index'


class Template extends Component {
 

  selectTemplate = () => {
    this.props.clickHandler()
    if(this.props.selectedTemplate.name === this.props.template.name) {
        return
    }
    this.props.onSelectTemplate(this.props.template)

  }

  render() {
    return (
      <div className="col-md-3 template" style={{backgroundImage: `url(${this.props.template.file})`}} 
        onClick={this.selectTemplate}
      >
        <h5>{this.props.template.name}</h5>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedTemplate: state.templates.selectedTemplate
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSelectTemplate: (template) => dispatch(actions.selectTemplate(template))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);
