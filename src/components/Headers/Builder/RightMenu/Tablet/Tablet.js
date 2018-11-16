import React from 'react'
import tabletSvg from '../../../../../assets/images/tablet.svg'
import ReactSVG from 'react-svg'
import { Button, ButtonContent } from '../../../../../styled/Header'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'


const tablet = (props) => {
  return (
    <Button>
        <ButtonContent onClick={() => props.onChangeWidth('768px')}>
            <ReactSVG src={tabletSvg}  />
            <p>Tablet</p>
        </ButtonContent>
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeWidth: (width) => dispatch(actions.changeWidthWorkspace(width))
    }
}

export default connect(null, mapDispatchToProps)(tablet);
