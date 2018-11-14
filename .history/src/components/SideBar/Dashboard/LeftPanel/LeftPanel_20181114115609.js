import React, { Component } from 'react'
import './LeftPanel.scss'
import NavigationItem from './NavigationItem/NavigationItem'
import { connect } from 'react-redux'

class LeftPanel extends Component {
  state = {
      items: ['dashboard', 'templates', 'websites'],
  }

  render() {
    return (
        <div className="dashboard-side-bar-left">
            {this.state.items.map((item,index) => <NavigationItem key={index}  image={item} active={this.state.active} />)}
        </div>
    )
  }
}



export default LeftPanel;