import React from 'react'
import './Alert.scss'

const alert = (props) => {
  return (
    <div className={"alert alert-" + props.type} >
      { props.children }
    </div>
  )
}

export default alert;