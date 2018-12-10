import React, { Component } from 'react'
import styled from 'styled-components';

const LinkStyled = styled.div`
  a {
    font-family: Muli;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.57;
    letter-spacing: 0.2px;
    color: #4d8ded;
  }

`

class Link extends Component {
    render() {
        return (
            <LinkStyled className="builder-link">
                <a href="http://google.com">Founder of Some company</a>
            </LinkStyled>
        )
    }
}

export default Link;