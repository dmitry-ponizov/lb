import React from 'react'
import trashImg from '../../../../../assets/images/trash.svg'
import ReactSVG from 'react-svg'
import styled from 'styled-components';

const RowIconWrapper = styled.div`
    display:none;
    border-radius: 50%;
    border: 1px solid #e36854;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
`
const DeleteIcon = styled.div`
    margin-bottom: 3px;
`

const deleteButton = (props) => {
  return (
    <RowIconWrapper className="row-icon-wrapper" onClick={ props.deleteRowHandler }>
        <DeleteIcon>
            <ReactSVG src={trashImg}  />
        </DeleteIcon>
    </RowIconWrapper>
  )
}

export default deleteButton;
