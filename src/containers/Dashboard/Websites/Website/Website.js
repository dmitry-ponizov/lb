import React from 'react'
import { Card } from '../../../../styled/Card'
import styled from 'styled-components'


const HoveredCard = styled(Card)`
   position: relative;
    &:hover {
      .website-modal {
        transform:translateX(0%);
        opacity:1;
      }
    }

`
const WebsiteModal = styled.div`
      transition-duration: 0.3s;
      opacity:0;
      position:absolute;
      z-index:2;
      bottom: 17px;
      width: 260px;
      height: 70px;
      border-radius: 5px;
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
      background-color: #ffffff;
      transform: translateY(30%);
      padding: 15px;
`

const WebsiteName = styled.span`
        font-family: Muli;
        font-size: 16px;
        letter-spacing: 0.3px;
        color: #000000;
`

const PublishBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`
const Publish = styled.div`
      font-family: Muli;
      font-size: 12px;
      letter-spacing: 0.3px;

`

const Settings = styled.div`
    font-family: Muli;
    font-size: 12px;
    letter-spacing: 0.3px;
    color: #4f6ad1;
    i {
      margin-left: 5px;
    }

`
const  website  = (props) =>{



    return (
      <HoveredCard style={{backgroundImage: `url(${props.website.theme_image})`}} 
          onClick={() => props.selectWebsiteHandler(props.website)} >
        <WebsiteModal className="website-modal">
           <WebsiteName>{ props.website.name }</WebsiteName>
           <PublishBlock>
             <Publish style={{color: props.website.is_publish ? '#48be4d' : '#e36854'}}>{props.website.is_publish ? 'Published' : 'Unpublished'}</Publish>
             <Settings>Settings
               <i className="fa fa-angle-right"></i>
             </Settings>
           </PublishBlock>
        </WebsiteModal>
      </HoveredCard>
    )
  
}

export default website;
