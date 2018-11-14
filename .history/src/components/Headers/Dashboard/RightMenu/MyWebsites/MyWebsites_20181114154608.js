import React from 'react'
import styled from 'styled-components'


const StyledMyWebsites = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const TitleMyWebsites = styled.div`
  font-family: Muli;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #000000;
`

const CountWebsites = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid transparent;
  background-color: #e36854;
  span {
  font-family: Muli;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1px;
  color: #ffffff;
  }

`

const myWebsites = (props) => {
  return (
    <StyledMyWebsites>
      <TitleMyWebsites>My Websites</TitleMyWebsites>
      <CountWebsites><span>4</span></CountWebsites>
    </StyledMyWebsites>
  )
}


export default myWebsites;