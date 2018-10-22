import React, { Component } from 'react'
import NavigationItem from '../../components/UI/NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Dashboard extends Component {

    componentDidMount() {
        this.props.toUserProfile(this.props.token)
    }
    render() {
        return (
            <div>
                <h1>Dashboard component</h1>
                <h3>Hello { this.props.userProfile ? this.props.userProfile.first_name + ' ' + this.props.userProfile.last_name : null }</h3>
                <NavigationItem link="/logout" >Logout</NavigationItem>
            </div>
        
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toUserProfile: (token) => dispatch(actions.userProfile(token))
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userProfile: state.dashboard.userProfile
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);