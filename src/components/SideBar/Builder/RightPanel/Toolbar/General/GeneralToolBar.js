import React from 'react'
import './GeneralToolBar.scss'
import Tool from '../Tool/Tool'

const GeneralToolBar = ({ tools }) => {

    const toolsCategoryFilter = () => {
        return tools.filter(tool => tool.category === 'general')
    }
    
    return (
        <div>
            <p className="builder-general-tool-bar">General</p>
            <div className="row">
            { toolsCategoryFilter().map(tool => (
                <Tool key={tool.id}  tool={ tool } />
               ))}
            </div>
        </div>
    )
}

export default GeneralToolBar;