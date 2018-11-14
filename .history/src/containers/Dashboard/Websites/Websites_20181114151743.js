import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, WorkspaceTitle } from '../../../styled/Workspace'
import 

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

export default Websites;