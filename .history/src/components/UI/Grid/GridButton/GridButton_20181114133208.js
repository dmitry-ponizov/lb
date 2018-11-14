import React from 'react'
import './GridButton.scss'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'
import ReactSVG from 'react-svg'
import styled from 'styled-components'


const GridButtonStyled = styled.li`
    .svg-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover {
            color
        }
    }
    .active {
        background-color:#fdf7f6;
        border-radius: 6px;
        svg {
            g {
                stroke: #e36854;;
            }
            path {
                stroke: #e36854;
            }
        }
        .grid-title {
            color: #e36854;
        }
}
`

const titles = {
    oneColumn:'1 column',
    twoColumns: '2 equal columns',
    threeColumns: '3 equal columns',
    fourColumns: '4 equal columns',
    twoUneven: '2 uneven columns',
    threeUneven : '3 uneven columns'
}

const gridButton = ({ image, gridType, onSelectedGrid }) => (
    <GridButtonStyled onClick={() => onSelectedGrid(image)} >
        <div className={'svg-wrapper' + (gridType === image ? ' active': '')}>
            <div className="svg-container">
                    <ReactSVG src={require(`../../../../assets/images/row/${image}.svg`)}  />
            </div>
            <p className="grid-title">{ titles[image] }</p>
        </div>
    </GridButtonStyled>
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