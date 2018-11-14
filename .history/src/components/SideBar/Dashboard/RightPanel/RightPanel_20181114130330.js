import React from 'react'
import './RightPanel.scss'
import NavigationItem from './NavigationItem/NavigationItem'


const rightPanel = (props) => {
    return (
        <div className={'dashboard-side-bar-right' + (props.active ? ' show' : '')}>
            <ul>
                {props.items.map((item, index) => <NavigationItem key={index} item={item} />)}
            </ul>
        </div>
    )
}




export default rightPanel;