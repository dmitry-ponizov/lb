import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, WorkspaceTitle } from '../../../styled/Workspace'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions'

class Websites extends Component {

  componentDidMount = () => {
    this.props.onFetchWebsites()
  }
  
  render() {
    return (
      <DashboardLayout>
        <WorkspaceWrapper className="col-md-10">
          <WorkspaceTitle> My Websites</WorkspaceTitle>
        </WorkspaceWrapper>
      </DashboardLayout>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      onFetchWebsites: () => dispatch(actions.fetchWebsites())
    }
}
export default connect(null, mapDispatchToProps)(Websites);