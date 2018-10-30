import React, { Component } from 'react'
import './Dashboard.scss'
import Builder from '../Builder/Builder'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Dashboard extends Component {

    componentDidMount() {
        this.props.toUserProfile(this.props.token)
    }

    render() {
        
        return (
             <div>
               
                <Builder />
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