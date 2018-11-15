import React, { Component } from 'react'
import './Template.scss'
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index'
import { Card } from '../../../../styled/Card'


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
      <Card  style={{backgroundImage: `url(${this.props.template.file})`}} onClick={this.selectTemplate} >
        <h5>{this.props.template.name}</h5>
      </Card>
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
