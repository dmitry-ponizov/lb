import React from 'react'
import './RightPanel.scss'
import NavigationItem from '../../../UI/NavigationItem/NavigationItem'

const RightPanel = (props) => {
    return (
        <div className={'dashboard-side-bar-right' + (props.active ? ' show' : '')}>
            <ul>
                <NavigationItem link="/templates">Templates</NavigationItem>
            </ul>
        </div>
    )
}





export default RightPanel;