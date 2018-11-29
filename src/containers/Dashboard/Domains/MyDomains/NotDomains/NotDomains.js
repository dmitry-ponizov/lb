import React, { Component } from 'react'
import { EmptyWrapper, EmptyTitle } from '../../../../../styled/Empty'
import { WorkspaceLink } from '../../../../../styled/Workspace'
import manImg from '../../../../../assets/images/man.svg'
import ReactSVG from 'react-svg'


class NotDomains extends Component {
  render() {
    return (
        <EmptyWrapper>
            <ReactSVG src={manImg} />
            <EmptyTitle>It seems you don`t have domains yet…</EmptyTitle>
            <WorkspaceLink onClick={() => this.props.activeTabHandler('Buy Domain')} >
            Buy domain
            <i className="fa fa-angle-right"></i>
            </WorkspaceLink>
        </EmptyWrapper>
    )
  }
}
export default NotDomains;