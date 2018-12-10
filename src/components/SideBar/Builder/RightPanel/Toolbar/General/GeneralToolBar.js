import React from 'react'
import Tool from './Tool/Tool'
import styled from 'styled-components'


const BuilderGeneralToolBar = styled.div`
    text-align: left;
    font-family: Muli;
    font-size: 18px;
`
const Wrapper = styled.div`
    padding: 15px;
`

const GeneralToolBar = ({ tools }) => {

    const toolsCategoryFilter = () => {
        return tools.filter(tool => tool.category === 'general')
    }
    
    return (
        <Wrapper>
            <BuilderGeneralToolBar>General</BuilderGeneralToolBar>
            <div className="row">
            { toolsCategoryFilter().map(tool => (
                <Tool key={tool.id}  tool={ tool } />
               ))}
            </div>
        </Wrapper>
    )
}

export default GeneralToolBar;