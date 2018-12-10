import React from 'react'
import PageLink from './PageLink/PageLink'
import styled from 'styled-components'
import Edit from './Edit/Edit'


const Wrapper = styled.div`
 display: flex;
`
const Menu = (props) => {
  return (
    <Wrapper className="menu">
      {props.pages.map((page, index) => 
        <PageLink 
          key={index} 
          page={Object.keys(page)[0]} 
          onSelectPage={() => props.changePage(page)}
          currentPage={ props.currentPage}
        />)}
      { props.editable && <Edit editHandler={props.editHandler} /> }
    </Wrapper>
  )
}



export default Menu