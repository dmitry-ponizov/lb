import React, { Component } from 'react'
import DashboardHedader from '../../../components/Headers/Dashboard/DashboardHeader'
import DashboardSideBar from '../../../components/SideBar/Dashboard/DashboardSideBar';
import styled from 'styled-components'

const DashboardWrapperStyles = styled.div`
        display: flex;
        min-height: ${props => props.theme.minHeight};
`
class DashboardLayout extends Component {
    state = {
        active: true
    }
    toggleHandler = (active) => {
        this.setState({active})
    }


  render() {
    return (
        <div className="dashboard">
            <DashboardHedader  toggleHandler={(active) => this.toggleHandler(active) }  />
            <DashboardWrapperStyles>
                <DashboardSideBar  active={ this.state.active } />
            { this.props.children }
            </DashboardWrapperStyles>
        </div>
    )
  }
}

export default DashboardLayout;