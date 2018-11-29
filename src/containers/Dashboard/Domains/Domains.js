import React, { Component } from 'react'
import DashboardLayout from '../../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper,Workspace, WorkspaceTitle } from '../../../styled/Workspace'
import Tabs from '../../../components/UI/Tabs/Tabs'
import MyDomains from './MyDomains/MyDomains';
import BuyDomains from './BuyDomains/BuyDomains';


class Domains extends Component {
  state = {
    activeTab: 'My Domains'
  }

  activeTabHandler = (tabNumber) => {
      this.setState({ activeTab: tabNumber })
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }
  render() {
    return (
      <DashboardLayout>
        <WorkspaceWrapper>
          <WorkspaceTitle>Domains</WorkspaceTitle>
          <Workspace>
            <Tabs activeTab={this.state.activeTab} onClickTabItem={(tab) => this.onClickTabItem(tab)}>
              <div label="My Domains">
                <MyDomains activeTabHandler={ (tabNumber) => this.activeTabHandler(tabNumber) } />
              </div>
              <div label="Buy Domain">
                <BuyDomains  activeTabHandler={ (tabNumber) => this.activeTabHandler(tabNumber) }  />
              </div>
            </Tabs>
          </Workspace>
        </WorkspaceWrapper>
      </DashboardLayout>    
    )
  }
}

export default Domains;