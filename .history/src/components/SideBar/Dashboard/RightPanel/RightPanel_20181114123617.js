import React from 'react'
import './RightPanel.scss'
import NavigationItem from '../../../UI/NavigationItem/NavigationItem'
import { connect } from 'react-redux'


const RightPanel = (props) => {
    return (
        <div className={'dashboard-side-bar-right' + (props.active ? ' show' : '')}>
            <ul>
                <NavigationItem link="/templates">Templates</NavigationItem>
            </ul>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onSelectSection: (section) => dispatch(actions.selectSection(section))
    }
}

const mapStateToProps = state => {
    return {
        active: state.dashboard.selectedSection
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);