import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, ButtonContent } from '../../../../../styled/Header'
import styled from 'styled-components'

const BtnSyled = styled(ButtonContent)`
    i {
        font-size: 20px;
    }
    &:hover {
        color: ${props => props.theme.mainColor}
    }
    
` 

class Logout extends Component {
    clickHandler = () => {
        this.props.history.push('/logout')
    }
    render() {
        return (
            <Button>
                <BtnSyled onClick={this.clickHandler}>
                     <i className="fa fa-sign-out"></i>
                     <p>Logout</p>
                </BtnSyled>
            </Button>
        )
    }
}


export default withRouter(Logout);