import React from 'react'
import './Logo.scss'
import logotype from '../../../../../assets/images/logotype.png'

const Logo = (props) => (

    <div className={'builder-header-logo' +  (props.active ? " show" : "")}>
        <div className="builder-header-image-wrapper">
             <img src={logotype} alt="logotype" />
        </div>
    </div>
)

export default Logo;