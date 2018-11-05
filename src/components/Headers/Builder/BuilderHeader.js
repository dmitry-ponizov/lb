import React from 'react'
import './BuilderHeader.scss'
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu'

const BuilderHeader = (props) => (
    <div className="builder-header">
        <LeftMenu toggleHandler={(active) => props.toggleHandler(active) } />
        <RightMenu previewHanlder={props.previewHanlder} />
    </div>
)

export default BuilderHeader;