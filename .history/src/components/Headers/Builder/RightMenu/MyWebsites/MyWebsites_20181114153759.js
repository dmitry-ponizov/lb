import React from 'react'
import styled from 'styled-components'


const StyledMyWebsites = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const TitleMyWebsites = styled.div`
  font-family: Muli;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #000000;
`

const myWebsites = (props) => {
  return (
    <StyledMyWebsites>
      <TitleMyWebsites>My Websites</TitleMyWebsites>
    </StyledMyWebsites>
  )
}


export default myWebsites;