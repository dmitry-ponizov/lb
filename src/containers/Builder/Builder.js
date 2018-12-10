import React, { Component } from 'react'
import './Builder.scss'
import SideBar from '../../components/SideBar/Builder/SideBar'
import Content from '../../components/UI/Grid/Content/Content'
import BuilderLayout from '../../hoc/Layouts/BuilderLayout/BuilderLayout'
import StickyBox from "react-sticky-box";

class Builder extends Component {

    state = {
        editable: true,
        active: true
    }

    render() {
        return (
            <BuilderLayout>
                <StickyBox>
                    <SideBar  active={this.state.active} component="general" />
                </StickyBox>
                <Content editable={this.state.editable} />
            </BuilderLayout>
        )
    }
}

export default Builder;