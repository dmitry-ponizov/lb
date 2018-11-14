import React from 'react'
import ReactSVG from 'react-svg'
import styled from 'styled-components'

const NavStyled = styled.div

const navigationItem = (props) => {
  return (
    <div>
      <ReactSVG src={require(`../../../../../assets/images/dashboard/${props.image}.svg`)}  />
    </div>
  )
}

export default navigationItem;