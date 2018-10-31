import React from 'react'
import './SideBar.scss'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel';

const SideBar = (props) => (
    <div className="builder-side-bar">
        <LeftPanel />
        <RightPanel active={props.active}/>
    </div>
)

export default SideBar;