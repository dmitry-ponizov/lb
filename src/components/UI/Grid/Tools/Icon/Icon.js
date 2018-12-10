import React from 'react'
import styled from 'styled-components'
import IconImg from '../../../../UI/Grid/Layouts/TemplateLanding/images/icon.png'

const Backgound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f8f8f9;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Icon = () => {
  return (
      <Wrapper className="icon-wrapper">
        <Backgound className="icon-background">
            <img src={IconImg} alt="icon" />
        </Backgound>
      </Wrapper>
  )
}
export default Icon