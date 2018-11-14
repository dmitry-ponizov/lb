import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, WorkspaceTitle } from '../../../styled/Workspace'
import { connect } from 'react-redux'

class Websites extends Component {
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
      
    }
}
export default Websites;