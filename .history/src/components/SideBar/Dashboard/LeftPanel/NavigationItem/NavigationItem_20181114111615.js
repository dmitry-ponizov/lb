import React from 'react'
import ReactSVG from 'react-svg'


const navigationItem = (props) => {
  return (
    <div>
      <ReactSVG src={require(`../../../../../../assets/images/dashboard/${props.image}.svg`)}  />
    </div>
  )
}

export default navigationItem;