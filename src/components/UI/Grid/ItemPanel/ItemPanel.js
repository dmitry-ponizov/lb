import React, { Component } from 'react';
import TextPanel from './TextPanel/TextPanel'


class ItemPanel extends Component {
    components = {
        Text: TextPanel,
    };
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName  stylesHandler={(param, content) => this.props.stylesHandler(param, content)} />
    }
}
export default ItemPanel;