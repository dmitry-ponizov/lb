import React from 'react'
import ReactSVG from 'react-svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'

const NavStyled = styled.div`
    width: 20px;
    height: 20px;
    margin-bottom:30px;
    cursor: pointer;
    background: ${props => props.active && 'red'};
`

const navigationItem = (props) => {
  return (
    <NavStyled>
        <Link to={props.image} onClick={() => props.onSelectSection(props.image)}>
            <ReactSVG src={require(`../../../../../assets/images/dashboard/${props.image}.svg`)}  />
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
        active: stable.dashboard.selectedSection
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navigationItem);