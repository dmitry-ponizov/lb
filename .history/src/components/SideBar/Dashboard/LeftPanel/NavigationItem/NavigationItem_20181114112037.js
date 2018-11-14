import React from 'react'
import ReactSVG from 'react-svg'
import styled from 'styled-components'
import Link from 'react-router-dom'

const NavStyled = styled.div`
    width: 20px;
    height: 20px;
    margin-bottom:30px;
    cursor: pointer;
`

const navigationItem = (props) => {
  return (
    <NavStyled>
      <ReactSVG src={require(`../../../../../assets/images/dashboard/${props.image}.svg`)}  />
    </NavStyled>
  )
}

export default navigationItem;