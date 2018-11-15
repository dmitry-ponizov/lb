import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions'


const Button = styled.div`
  a {
    width: 140px;
    height: 45px;
    border-radius: 4px;
    background-color: #e36854;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration:none;
    font-family: Muli;
    font-size: 14px;
    font-style: normal;
    letter-spacing: 0.3px;
    color: #ffffff;
  
  }
  &:hover {
      a {
        background-color: #c15746;
      }  
  }
`

const createWebsite  = (props) => {

  return (
    <Button >
      <Link to='/templates' onClick={() => props.onSelectSection('templates')}>
        Create Website
      </Link>
    </Button>
  )
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectSection: (section) => dispatch(actions.selectSection(section))
    }
}
export default connect(null, mapDispatchToProps)(createWebsite);