import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

с

const navigationItem = (props) => {
  return (
    <Link to={props.item}>
      { props.item }
    </Link>
  )
}

export default navigationItem;
