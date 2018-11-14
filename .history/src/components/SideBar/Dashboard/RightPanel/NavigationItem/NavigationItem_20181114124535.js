import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationStyled = styled.li`
    display: flex;
    flex-direction: column;
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
