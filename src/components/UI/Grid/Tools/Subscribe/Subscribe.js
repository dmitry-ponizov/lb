import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.div`
  display: flex;
  /* justify-content: center; */
  input {
    padding: 5px;
    width: 267px;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 2px;
  }

`
const SubscribeBtn = styled.div`
    margin-left: 7px;
    padding: 12px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    box-shadow: 0 5px 10px 0 rgba(77,141,237,0.2);
    background-color: #4d8ded;
`
const Subscribe = () => {
  return (
    <InputStyled className="subscribe-container">
      <input type="text" placeholder="Your email" />
      <SubscribeBtn className="subscribe-btn">Subscribe</SubscribeBtn>
    </InputStyled>
  )
}
export default Subscribe