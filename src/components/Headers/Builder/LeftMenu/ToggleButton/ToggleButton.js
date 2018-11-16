import React, { Component } from 'react'
import './ToggleButton.scss'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'

const Button = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    height: 60px;
    width: 60px;
    border-right:  solid 1px #eaeaea;
`

class ToggleButton extends Component {

    state = {
        active: true
    }

    toggleHandler = () => {
        this.setState(prevState => ({ 
            active: !prevState.active
        }))

        this.props.toggleHandler(!this.state.active)
    }
    render(){
        return (
            <Button onClick={this.props.onToggleSidebar}>
                <div className={this.state.active ? 'target-burger toggled': 'target-burger'}>
                    <ul className="buns">
                        <li className="bun"></li>
                        <li className="bun"></li>
                    </ul>
                </div>
            </Button>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onToggleSidebar: () => dispatch(actions.toggleSideBar())
    }
}

export default connect(null, mapDispatchToProps)(ToggleButton);