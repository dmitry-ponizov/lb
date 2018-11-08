import React from 'react'
import './DashboardHeader.scss'
import LeftMenu from '../Builder/LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu'

const DashboardHeader = (props) => (
    <div className="dashboard-header">
        <LeftMenu preview={props.preview} toggleHandler={(active) => props.toggleHandler(active) } />
        <RightMenu  />
    </div>
)

export default DashboardHeader;