import React from 'react'
import './BuilderHeader.scss'
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu'

const BuilderHeader = (props) => (
    <div className="builder-header">
        <LeftMenu preview={props.preview} toggleHandler={(active) => props.toggleHandler(active) } />
        <RightMenu preview={props.preview} previewHandler={props.previewHandler} />
    </div>
)

export default BuilderHeader;