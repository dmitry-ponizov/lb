import React from 'react'
import ReactSVG from 'react-svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'
import './NavigationItem.scss'

const NavStyled = styled.div`
    width: 20px;
    height: 20px;
    margin-bottom:30px;
    cursor: pointer;

     svg  g{
    fill: #e36854;
    stroke: #e36854;
}

`

const navigationItem = (props) => {
  return (
    <NavStyled>
        
        <Link className={ props.item === props.active ? 'active' : ''} to={props.item} onClick={() => props.onSelectSection(props.item)}>
            <ReactSVG src={require(`../../../../../assets/images/dashboard/${props.item}.svg`)}  />
        </Link>
    </NavStyled>
  )
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectSection: (section) => dispatch(actions.selectSection(section))
    }
}

const mapStateToProps = state => {
    return {
        active: state.dashboard.selectedSection
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navigationItem);