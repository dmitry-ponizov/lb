import React from 'react'
import { Link } from 'react-router-dom'



const navigationItem = (props) => {
  return (
    <Link to={props.item}>
      { props.item }
    </Link>
  )
}

export default navigationItem;
