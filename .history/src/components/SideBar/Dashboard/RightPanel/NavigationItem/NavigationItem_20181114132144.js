import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'

const NavigationStyled = styled.li`
    margin-bottom: 27px;
    a {
        text-transform: capitalize;
        color: #000;
        text-decoration: none;
        font-family: 'Muli';
        &:hover {
            color: #e36854;
        }
    }
    .active {
        color: #e36854;
    }
`

const navigationItem = (props) => {
  return (
      <NavigationStyled>
        <Link to={props.item} onClick={() => props.onSelectSection(props.item)} className={ props.item === props.activeItem ? 'active' : ''} >
        { props.item }
        </Link>
      </NavigationStyled>
  )
}


const mapDispatchToProps = dispatch => {
    return {
        onSelectSection: (section) => dispatch(actions.selectSection(section))
    }
}

const mapStateToProps = state => {
    return {
        activeItem: state.dashboard.selectedSection
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navigationItem);
