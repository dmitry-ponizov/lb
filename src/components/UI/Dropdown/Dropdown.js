import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const DropdownStyled = styled.div`

`
const DropdownBtn = styled.button`
    color: #000;
    font-family: 'Muli';
    font-size: 13px;
    border: none;
    border-radius: 0;
    height: 60px;
    background: #fff;
    width: 100%;
    &:hover {
        background-color: ${props => props.theme.mainColor}
    }
    &:active {
        background-color: ${props => props.theme.mainColor}
    }
    &:focus {
        box-shadow: none!important;
    }
    &:after{
        margin-left: 10px;
    }
`

const DropdownMenu = styled.div`
    min-height: 50px;
    min-width: 175px;
    font-size: 14px;
    text-align: center;
    a {
       padding: 12px 20px;
       i {
           margin-right: 5px;
         }
    }
`
class Dropdown extends Component {

    state = {
        open: false
    }

    clickHanlder = e => {
        e.preventDefault()
        this.props.clickHandler(e.target.innerHTML);
        this.setState({ open: false })
    }

    openHandler = () => {
        this.setState(prevState => ({ 
            open: !prevState.open
        }))
    }

    render() {
        return(
            <DropdownStyled className={'dropdown' + (this.state.open ? ' show' : '')}>
                <DropdownBtn  className="btn btn-secondary dropdown-toggle"  onClick={this.openHandler} >
                     { this.props.selected ? this.props.selected : this.props.title}
                </DropdownBtn>
                <DropdownMenu  className={'dropdown-menu' + (this.state.open ? ' show' : '')} >
                     {this.props.options.map((option, index) => (
                        <Link  key={index} to="/logout" className="dropdown-item" >
                            <i className="fa fa-sign-out"></i>
                            { option }
                        </Link>
                    ))}
                </DropdownMenu>
            </DropdownStyled>
        )
    }
}

export default Dropdown;