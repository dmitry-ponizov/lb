import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper,Workspace, WorkspaceTitle } from '../../../styled/Workspace'

class Domains extends Component {
  render() {
    return (
      <DashboardLayout>
        <WorkspaceWrapper>
          <WorkspaceTitle>Domains</WorkspaceTitle>
          <Workspace></Workspace>
        </WorkspaceWrapper>
      </DashboardLayout>    
    )
  }
}

export default Domains;