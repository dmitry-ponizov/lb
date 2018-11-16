import React, { Component } from 'react'
import ToggleButton from './ToggleButton/ToggleButton'
import Logo from './Logo/Logo'
import styled from 'styled-components'

const LeftMenuWrap = styled.div`
    display: flex;
    height: 60px;
`
class LeftMenu extends Component {

    state = {
        active: true
    }

    toggleHandler = (active) => {
        this.setState({
            active
        })
        this.props.toggleHandler(active)
    }

    render() {
        return (
            <LeftMenuWrap>
                {!this.props.preview && <ToggleButton toggleHandler={(active) => this.toggleHandler(active) } />}
                <Logo active={this.state.active} />
            </LeftMenuWrap>
        )
    }
} 

export default LeftMenu;