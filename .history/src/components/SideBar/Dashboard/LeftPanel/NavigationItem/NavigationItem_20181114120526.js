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
`

const navigationItem = (props) => {
  return (
    <NavStyled>
        { props.item === props.active ? 'true' : '' }
        <Link to={props.item} onClick={() => props.onSelectSection(props.item)}>
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