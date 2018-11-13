import React from 'react'
import styled  from 'styled-components'

const PublishWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #e36854;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Muli';
    max-width: 150px;
    font-size: 14px;
    cursor: pointer;
    user-select: none; 
`
const publish = () => {
  return (
    <PublishWrapper>
        Publish website
    </PublishWrapper>
  )
}

export default publish;