import React from 'react'
import ReactSVG from 'react-svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavStyled = styled.div`
    width: 20px;
    height: 20px;
    margin-bottom:30px;
    cursor: pointer;
    background
`

const navigationItem = (props) => {
  return (
    <NavStyled>
        <Link to={props.image} onClick={props.activeHandler}>
            <ReactSVG src={require(`../../../../../assets/images/dashboard/${props.image}.svg`)}  />
        </Link>
    </NavStyled>
  )
}

export default navigationItem;