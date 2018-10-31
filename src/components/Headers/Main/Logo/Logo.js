import React from 'react'
import zeeasyLogo from "../../../../assets/images/logo-zeeasy.png"
import './Logo.scss'

const logo = (props) => (
  <a className="navImage" href="/">
      <img className={"d-inline-block align-top"} src={zeeasyLogo} alt="Zeeasy logo"  />
  </a>
);

export default logo;
