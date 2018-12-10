import React from 'react'
import './TemplateLanding.css'

const TemplateLanding = (props) => {
    return (
        <div className="template-landing theme-wrapper">
            <div className="theme-container theme-background">
                {/* <div className="container"> */}
                    {props.children}
                {/* </div> */}
            </div>
        </div>
    )
}
export default TemplateLanding