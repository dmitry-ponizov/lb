import React from 'react'
import ReactSVG from 'react-svg'
import * as dfd from '../../../../../'

const navigationItem = (props) => {
  return (
    <div>
      <ReactSVG src={require(`../../../../../../assets/images/dashboard/${props.image}.svg`)}  />
    </div>
  )
}

export default navigationItem;