import React from 'react'
import GeneralToolBar from './Toolbar/General/GeneralToolBar'
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
    padding: 20px;
    min-width: 260px;
`

const RightPanel = (props) => {
    return (
        <RigthPanelStyles show={props.show} >
            <ToolsWrap>
                <GeneralToolBar tools={props.tools} />
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