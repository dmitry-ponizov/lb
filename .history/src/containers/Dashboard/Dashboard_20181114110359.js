import React, { Component } from 'react'
import './Dashboard.scss'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import DashboardLayout from '../../hoc/Layouts/DashboardLayout/DashboardLayout'
import { WorkspaceWrapper, Workspace } from '../../styled/Workspace'

class Dashboard extends Component {

    componentDidMount() {
        this.props.toUserProfile()
    }
  
    render() {
        return (<DashboardLayout>
                    <WorkspaceWrapper className="col-md-10">
                        <h2>Dashboard</h2>
                        <Workspace>
                        </Workspace>
                    </WorkspaceWrapper>
                </DashboardLayout>)
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