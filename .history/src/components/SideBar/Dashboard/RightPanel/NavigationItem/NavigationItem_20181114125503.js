import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationStyled = styled.li`
    margin-bottom: 27px;
    a {
        text-transform: capitalize;
        color: #000;
        text-decoration: none;
        &:hover {
            /* color:  */
        }
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
