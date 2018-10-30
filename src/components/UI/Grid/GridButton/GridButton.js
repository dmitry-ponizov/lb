import React from 'react'
import './GridButton.scss'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'

const gridButton = ({ image, gridType, onSelectedGrid }) => (
    <li onClick={() => onSelectedGrid(image)} className={gridType === image ? 'active': null}>
        <img src={require(`../../../../assets/images/row/${image}.png`)} alt={image} />
    </li>
)

const mapDispatchToProps = dispatch => {
    return {
        onSelectedGrid: (gridType) => dispatch(actions.selectGridType(gridType)),
    }
}

const mapStateToProps = state => {
    return {
        gridType: state.builder.gridType
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(gridButton)    