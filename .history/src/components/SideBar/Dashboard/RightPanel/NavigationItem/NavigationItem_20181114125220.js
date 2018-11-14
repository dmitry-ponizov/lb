import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationStyled = styled.li`
    color: #000;
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
