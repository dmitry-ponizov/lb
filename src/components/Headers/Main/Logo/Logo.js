import React from 'react'
import zeeasyLogo from "../../../../assets/images/logo-zeeasy.png"
import styled from 'styled-components'

const Logo = styled.div`
    display: inline-block;
    height: 5.3rem;
    img {
        height: 100%;
    }
`

const logo = (props) => (
  <Logo className="navImage" href="/">
      <img className={"d-inline-block align-top"} src={zeeasyLogo} alt="Zeeasy logo"  />
  </Logo>
);

export default logo;
