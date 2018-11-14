import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationStyled = styled.li`
    margin-bottom: 25px;
    a {
        color: #000;
        text-decoration: none;
    }
`

const navigationItem = (props) => {
  return (
      <NavigationStyled>
        <Link to={props.item}>
        { props.item }
        </Link>
      </NavigationStyled>
  )
}

export default navigationItem;
