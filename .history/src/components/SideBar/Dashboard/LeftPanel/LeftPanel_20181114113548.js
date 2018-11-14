import React, { Component } from 'react'
import './LeftPanel.scss'
import NavigationItem from './NavigationItem/NavigationItem'


class LeftPanel extends Component {
  state = {
      items: ['dashboard', 'templates', 'websites'],
      active: ''
  }
  activeHandler = (item) => {
    this.setState({active: item})
  }
  render() {
    return (
        <div className="dashboard-side-bar-left">
            {this.state.items.map((item,index) => <NavigationItem key={index} image={item} active={} />)}
        </div>
    )
  }
}


export default LeftPanel;