import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, ButtonContent } from '../../../../../styled/Header'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'

const BtnSyled = styled(ButtonContent)`
    i {
        font-size: 20px;
    }
    &:hover {
        color: ${props => props.theme.mainColor}
    }
    
` 

class Back extends Component {

  clickHandler = () => {
    this.props.history.push(this.props.to)
    this.props.onChangePublishStatus()
  }
  render() {
    return (
        <Button>
            <BtnSyled  onClick={this.clickHandler}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                <p>Back</p>
            </BtnSyled>
        </Button>
      )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangePublishStatus: () => dispatch(actions.changePublishStatus())
    }
}


export default withRouter(connect(null, mapDispatchToProps)(Back));