import React, { Component } from 'react';
import GreenLayout from './GreenLayout/GreenLayout';
import RedLayout from './RedLayout/RedLayout';


class Layout extends Component {
    components = {
        greenLayout: GreenLayout,
        redLayout: RedLayout
    };
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName {...this.props} />
    }
}
export default Layout;