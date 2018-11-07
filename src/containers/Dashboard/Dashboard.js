import React, { Component, Fragment } from 'react'
import './Dashboard.scss'
import Builder from '../Builder/Builder'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import DashboardLayout from '../../hoc/Layouts/DashboardLayout/DashboardLayout'
import Templates from './Templates/Templates'



class Dashboard extends Component {

    componentDidMount() {
        this.props.toUserProfile()
    }
  
    render() {
        return (
            <Fragment>
             <DashboardLayout>
                <Templates />
            </DashboardLayout>
            </Fragment>
     
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toUserProfile: () => dispatch(actions.userProfile())
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userProfile: state.dashboard.userProfile
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);