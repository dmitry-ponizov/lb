import React, { Component } from 'react'
import './RightMenu.scss'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import { connect } from 'react-redux'
import MyWebsites from './MyWebsites/MyWebsites'


class RightMenu extends Component {

    state = {
        options: ['logout'],
        selected: null,
    }
    clickHandler = () => {

    }
    render () {
        return (
            <div className="dashboard-header-right-menu">
                <div className="dashboard-header-dropdown">
                    <MyWebsites />
                    <Dropdown   
                            title={this.props.user ? this.props.user.first_name + ' ' + this.props.user.last_name  : '' }
                            clickHandler={(selected) => this.clickHandler(selected)} 
                            selected={this.state.selected}
                            options={this.state.options} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.dashboard.userProfile
    }
}

export default connect(mapStateToProps)(RightMenu);