import React from 'react'
import './RightPanel.scss'
import NavigationItem from './NavigationItem/NavigationItem'
import { connect } from 'react-redux'

const rightPanel = (props) => {
    return (
        <div className={'dashboard-side-bar-right' + (props.show ? ' show' : '')}>
            <ul>
                {props.items.map((item, index) => <NavigationItem key={index} item={item} />)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        show: state.dashboard.sidebarShow
    }
}


export default connect(mapStateToProps)(rightPanel);