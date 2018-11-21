import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import { connect } from 'react-redux'
import styled from 'styled-components'

const RightPanelDashboard = styled.div`
    overflow: hidden;
    border-right:  solid 1px #eaeaea;
    max-width: ${props => props.show ? '260px': '0'};
    transition: max-width 1s ease;
    background: #fff;
    height: 100%;
`
const RightPanelList = styled.ul`
    margin: 0;
    list-style: none;
    padding: 20px;
    min-width: 260px;
`
const rightPanel = (props) => {
    return (
        <RightPanelDashboard show={props.show}>
            <RightPanelList>
                {props.items.map((item, index) => <NavigationItem key={index} item={item} />)}
            </RightPanelList>
        </RightPanelDashboard>
    )
}

const mapStateToProps = state => {
    return {
        show: state.dashboard.sidebarShow
    }
}


export default connect(mapStateToProps)(rightPanel);