import React from 'react'
import './GridButton.scss'
import { connect } from 'react-redux'
import * as actions from '../../../../store/actions/index'
import ReactSVG from 'react-svg'
import styled from 'styled-components'

const SvgContainer = styled.div`
    width: 56px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    div, svg{
        width: 100%;
        height: 100%;
    }
    svg {
        g {
            stroke: black;
        }
        path {
            stroke: black;
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
    .grid-title {
        font-family: Muli;
        font-size: 12px;
        font-weight: normal;
    }
`

const Active = styled.li`
  
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
    <SvgContainer>
    <li onClick={() => onSelectedGrid(image)} className={gridType === image ? 'active': ''}>
         
             <ReactSVG src={require(`../../../../assets/images/row/${image}.svg`)}  />
        
         <p className="grid-title">{ titles[image] }</p>
    </li>
     </SvgContainer>
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