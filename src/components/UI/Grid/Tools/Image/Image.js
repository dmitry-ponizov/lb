import React, { Component } from 'react'
import Resizable from 're-resizable';
import styled from 'styled-components';
import Img from '../../../../UI/Grid/Layouts/TemplateLanding/images/IconBig.png'

const ImageWrapper = styled.div`
  max-width: 459px;
  height: 320px;
  margin: 0 auto;
  border: 1px dashed #4d8ded;
  background-color: #edf3fd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class Image extends Component {
    onDragOver = (e) => {
        e.preventDefault();
    }
    
    onDragStart = (e, id) => {
        // e.dataTransfer.setData('id', id) 
    }
    render() {
        return (
            // <Resizable  className="Column" defaultSize={{ width: 100, height: 100,}}>
              <ImageWrapper className="builder-image">
                <img src={Img} alt="blank-img" />
              </ImageWrapper>
            // </Resizable>
        )
    }
}

export default Image;


