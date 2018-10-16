import React from 'react'
import zeeasyLogo from "../../../../assets/images/logo-zeeasy.png"
import './Logo.scss'

const logo = (props) => (
  <a className={"navbar-brand"} href="#">
      <img className={"d-inline-block align-top"} height="64" src={zeeasyLogo} alt="Zeeasy logo" width="202" />
  </a>
);

export default logo;
