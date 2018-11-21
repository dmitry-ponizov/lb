import React, { Component } from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import styled from 'styled-components'

const LeftPanelDashboard = styled.div`
    padding: 20px;
    width: 61px;
    border-right:  solid 1px #eaeaea;
`
class LeftPanel extends Component {
  

  render() {
    return (
        <LeftPanelDashboard>
            {this.props.items.map((item,index) => <NavigationItem key={index}  item={item}  />)}
        </LeftPanelDashboard>
    )
  }
}



export default LeftPanel;