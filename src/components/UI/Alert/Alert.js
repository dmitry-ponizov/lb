import React from 'react'
import styled from 'styled-components'

const AlertStyled = styled.div`
  font-size: 12px;
`

const alert = (props) => {
  return (
    <AlertStyled className={"alert alert-" + props.type} >
      { props.children }
    </AlertStyled>
  )
}

export default alert;