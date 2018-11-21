import React from 'react'
import styled  from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../../../../store/actions'


const PublishWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #e36854;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Muli';
    max-width: 150px;
    font-size: 14px;
    cursor: pointer;
    user-select: none; 
    transition: all 0.3s;
    &:hover {
      background-color: #c15746;
    }
`
const publish = (props) => {

  const clickHandler = () => {
    props.onSaveHandler()
    props.onTemplateInJson()
    props.onPublishWebsite()
  
  }
  return (
    <PublishWrapper onClick={ clickHandler }>
        Publish website
    </PublishWrapper>
  )
}

const mapDispathToProps = dispatch => {
  return {
    onTemplateInJson: () => dispatch(actions.templateInJson()),
    onPublishWebsite: () => dispatch(actions.publishWebsite())
  }
}

export default connect(null, mapDispathToProps)(publish);