import React from 'react'
import './RightPanel.scss'
import GeneralToolBar from './Toolbar/General/GeneralToolBar'
import { connect } from 'react-redux'

const RightPanel = (props) => {
    return (
        <div className={'builder-side-bar-right' + (props.show ? ' show' : '')}>
            <div className="builder-side-bar-tools-wrap">
                <GeneralToolBar tools={props.tools} />
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        tools: state.builder.tools,
        show: state.dashboard.sidebarShow
    }
}

export default connect(mapStateToProps)(RightPanel);