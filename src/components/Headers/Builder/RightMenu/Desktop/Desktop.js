import React from 'react'
import desktopSvg from '../../../../../assets/images/desktop.svg'
import ReactSVG from 'react-svg'
import { Button, ButtonContent } from '../../../../../styled/Header'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'


const ButtonStyled = styled(Button)`
    border-left: none;

`

const desktop = (props) => {
  return (
    <ButtonStyled>
        <ButtonContent onClick={() => props.onChangeWidth('100%')}>
            <ReactSVG src={desktopSvg}  />
            <p>Desktop</p>
        </ButtonContent>
    </ButtonStyled>
  )
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeWidth: (width) => dispatch(actions.changeWidthWorkspace(width))
    }
}

export default connect(null, mapDispatchToProps)(desktop);
