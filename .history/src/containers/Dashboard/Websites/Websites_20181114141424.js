import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper } from '../../../styled/Workspace'

class Websites extends Component {
  render() {
    return (
      <DashboardLayout>
        <WorkspaceWrapper className="col-md-10">
          <h2> My Websites</h2>
        </WorkspaceWrapper>
        
      </DashboardLayout>
    )
  }
}

export default Websites;