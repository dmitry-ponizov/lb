import React from 'react'
import ReactSVG from 'react-svg'
import styled from 'styled-components'

const NavStyled = styled.div`
    width: 20px;
    height: 20px;
    margin-top
`

const navigationItem = (props) => {
  return (
    <div>
      <ReactSVG src={require(`../../../../../assets/images/dashboard/${props.image}.svg`)}  />
    </div>
  )
}

export default navigationItem;