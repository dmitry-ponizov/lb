import React, { Component } from 'react'
import './LeftPanel.scss'
import NavigationItem from './NavigationItem/NavigationItem'

class LeftPanel extends Component {
  

  render() {
    return (
        <div className="dashboard-side-bar-left">
            {this.props.items.map((item,index) => <NavigationItem key={index}  item={item}  />)}
        </div>
    )
  }
}



export default LeftPanel;