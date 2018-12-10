import React from 'react'
import styled from 'styled-components';


const ButtonStyled = styled.div`
    width: 120px;
    height: 45px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 12px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    border-radius: 2px;
    box-shadow: 0 5px 10px 0 rgba(77,141,237,0.2);
    background-color: #4d8ded;
`
const Button = () => {
  return (
    <ButtonStyled className="builder-button">
      Read More
    </ButtonStyled>
  )
}

export default Button;