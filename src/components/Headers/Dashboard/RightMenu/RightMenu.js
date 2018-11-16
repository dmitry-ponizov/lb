import React, { Component } from 'react'
import Dropdown from '../../../UI/Dropdown/Dropdown';
import { connect } from 'react-redux'
import MyWebsites from './MyWebsites/MyWebsites'
import styled from 'styled-components'

const RightMenuStyled = styled.div`
    width: 500px;
    height: 60px;
    display: flex;
    justify-content: flex-end;
`

const DashboardDropDownStyled = styled.div`
    min-width: 175px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
`

class RightMenu extends Component {

    state = {
        options: ['logout'],
        selected: null,
    }
    clickHandler = () => {

    }
    render () {
        return (
            <RightMenuStyled>
                  <MyWebsites />
                    <DashboardDropDownStyled>
                        <Dropdown 
                                title={this.props.user ? this.props.user.first_name + ' ' + this.props.user.last_name  : '' }
                                clickHandler={(selected) => this.clickHandler(selected)} 
                                selected={this.state.selected}
                                options={this.state.options} />
                    </DashboardDropDownStyled>
            </RightMenuStyled>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.dashboard.userProfile
    }
}

export default connect(mapStateToProps)(RightMenu);