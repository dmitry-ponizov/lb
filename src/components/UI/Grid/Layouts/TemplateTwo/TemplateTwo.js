import React from 'react'
import './TemplateTwo.css'

const TemplateTwo = (props) => (

    <div className="template-two theme-wrapper">
        <div className="theme-container theme-background">
            {props.children}
        </div>
        <footer className="page-footer font-small blue theme-footer" >
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
            </div>
        </footer>
    </div>
)

export default TemplateTwo;