import React from 'react'
import './RightPanel.scss'
import NavigationItem from './NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions'

const rightPanel = (props) => {
    return (
        <div className={'dashboard-side-bar-right' + (props.active ? ' show' : '')}>
            <ul>
                {props.items.map((item, index) => <NavigationItem key={index} item={item} />)}
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
        activeItem: state.dashboard.selectedSection
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(rightPanel);