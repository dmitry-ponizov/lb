import React from 'react'
import Toolbar from './Toolbar/Toolbar'
import { connect } from 'react-redux'
import styled from 'styled-components'


const RigthPanelStyles = styled.div`
    overflow: hidden;
    border-right:  solid 1px #eaeaea;
    max-width: ${props => props.show ? '260px' : '0'};
    transition: max-width 1s ease;
    background: #fff;
    height: 100%;
`
const ToolsWrap = styled.div`
    height: 100%;
    min-width: 260px;
`

const RightPanel = (props) => {
    return (
        <RigthPanelStyles show={props.show} >
            <ToolsWrap>
                <Toolbar tools={props.tools} component={props.component} onSaveHandler = {props.onSaveHandler}/>
            </ToolsWrap>
        </RigthPanelStyles>
    )
}



const mapStateToProps = state => {
    return {
        tools: state.builder.tools,
        show: state.dashboard.sidebarShow
    }
}

export default connect(mapStateToProps)(RightPanel);